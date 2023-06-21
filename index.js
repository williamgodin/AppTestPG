const express = require("express");
const path = require("path");
const session = require('express-session');
const { Pool } = require("pg");

// Création du serveur Express
const app = express();

// Configuration du serveur
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
        secure: false, // Définissez cette option sur true si vous utilisez HTTPS
        httpOnly: true, // Empêche l'accès au cookie depuis JavaScript côté client
    }
}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Connexion à la base de donnée PostgreSQL
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Test",
    password: "postgres",
    port: 5432
});
console.log("Connexion réussie à la base de données");

/* Création de la table Livres (Livre_ID, Titre, Auteur, Commentaires)
const sql_create = `CREATE TABLE IF NOT EXISTS Livres (
  Livre_ID SERIAL PRIMARY KEY,
  Titre VARCHAR(100) NOT NULL,
  Auteur VARCHAR(100) NOT NULL,
  Commentaires TEXT
);`;
pool.query(sql_create, [], (err, result) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Création réussie de la table 'Livres'");
    // Alimentation de la table
    const sql_insert = `INSERT INTO Livres (Livre_ID, Titre, Auteur, Commentaires) VALUES
    (1, 'Mrs. Bridge', 'Evan S. Connell', 'Premier de la série'),
    (2, 'Mr. Bridge', 'Evan S. Connell', 'Second de la série'),
    (3, 'L''ingénue libertine', 'Colette', 'Minne + Les égarements de Minne')
  ON CONFLICT DO NOTHING;`;
    pool.query(sql_insert, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        const sql_sequence = "SELECT SETVAL('Livres_Livre_ID_Seq', MAX(Livre_ID)) FROM Livres;";
        pool.query(sql_sequence, [], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Alimentation réussie de la table 'Livres'");
        });
    });
});*/

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
});

// GET /
app.get("/", (req, res) => {
    // res.send("Bonjour le monde...");
    if (req.session.loggedin) {
        res.render("home")
    } else {
        // Not logged in
        res.render("login");
    }

});

//GET /index
app.get("/index", (req, res) => {
    if (req.session.loggedin) {
        res.render("index")
    } else {
        // Not logged in
        res.render("login");
    }
});
// GET /about
app.get("/about", (req, res) => {
    if (req.session.loggedin) {
        res.render("about")
    } else {
        // Not logged in
        res.render("login");
    }
});

// GET /data
app.get("/data", (req, res) => {
    const test = {
        titre: "Test",
        items: ["un", "deux", "trois"]
    };
    res.render("data", { model: test });
});

// GET /livres
app.get("/livres", async(req, res) => {
    const sql = "SELECT * FROM public.livres ORDER BY Titre";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("livres", { model: result.rows });
    });
});

// GET /create
app.get("/create", (req, res) => {
    res.render("create", { model: {} });
});

// POST /create
app.post("/create", (req, res) => {
    const sql = "INSERT INTO Livres (Titre, Auteur, Commentaires) VALUES ($1, $2, $3)";
    const book = [req.body.titre, req.body.auteur, req.body.commentaires];
    pool.query(sql, book, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect("/livres");
    });
});

// GET /edit/5
app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Livres WHERE Livre_ID = $1";
    pool.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("edit", { model: result.rows[0] });
    });
});

// POST /edit/5
app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const book = [req.body.titre, req.body.auteur, req.body.commentaires, id];
    const sql = "UPDATE Livres SET Titre = $1, Auteur = $2, Commentaires = $3 WHERE (Livre_ID = $4)";
    pool.query(sql, book, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect("/livres");
    });
});

// GET /delete/5
app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Livres WHERE Livre_ID = $1";
    pool.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("delete", { model: result.rows[0] });
    });
});

// POST /delete/5
app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Livres WHERE Livre_ID = $1";
    pool.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect("/livres");
    });
});

//GET /login
app.get("/login", (req, res) => {
    res.render("login");
});

// POST /login
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        pool.query('SELECT * FROM accounts WHERE username = $1 AND password = $2', [username, password], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.rows.length > 0) {
                // Authenticate the user
                req.session.loggedin = true;
                req.session.username = username;
                // Redirect to home page
                res.redirect('/home');
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

// GET /home
app.get('/home', function(req, res) {

    // If the user is logged in
    if (req.session.loggedin) {
        // Output username
        res.send('Bienvenue, ' + req.session.username + '!');
        res.render("home");
    } else {
        // Not logged in
        res.render('login');
    }
});