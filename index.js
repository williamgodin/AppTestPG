const express = require("express");
const path = require("path");
const session = require('express-session');
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { Pool } = require("pg");
const bodyParser = require('body-parser');

// Création du serveur Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    database: "Rapport",
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
        res.render("home", { req })
    } else {
        // Not logged in
        res.render("login", { req });
    }

});

//GET /index
app.get("/index", (req, res) => {
    if (req.session.loggedin) {
        res.render("index", { req })
    } else {
        // Not logged in
        res.render("login", { req });
    }
});

// GET /data
app.get("/data", async(req, res) => {
    const sql = "SELECT * FROM ca ORDER BY montant";
    pool.query(sql, [], (err, result) => {
        if (req.session.loggedin) {
            res.render("data", { req, model: result.rows });
        } else {
            // Not logged in
            res.render("login", { req });
        }
    });
});

// GET /create
app.get("/create", (req, res) => {
    res.render("create", { req, model: {} });
});



//GET /login
app.get("/login", (req, res) => {
    res.render("login", { req });
});

// POST /login
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        pool.query('SELECT * FROM connectdata WHERE username = $1 AND password = $2', [username, password], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.rows.length > 0) {
                // Authenticate the user
                req.session.loggedin = true;
                req.session.username = username;
                // Redirect to home page
                res.redirect('/data');
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
        res.render("data", { req, username: req.session.username });
    } else {
        // Not logged in
        res.render('login', { req });
    }
});

// GET /logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/home');
    });
});
//GET /forgot
app.get("/forgot-password", (req, res) => {
    res.render("forgot-password", { req, model: {} });
});

//GET /forgot
app.get("/reset-password", (req, res) => {
    res.render("reset-password", { req, model: {} });
});






// POST /forgot-password
app.post('/forgot-password', (req, res) => {
    const { username, email } = req.body;

    // Vérifier l'existence de l'utilisateur dans la base de données
    if (username && email) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        pool.query('SELECT * FROM connectdata WHERE username = $1 AND email = $2', [username, email], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.rows.length > 0) {
                // Tableau pour stocker les jetons de réinitialisation
                const resetTokens = new Map();
                // Générer un jeton de réinitialisation unique
                const resetToken = crypto.randomBytes(32).toString('hex');
                // Stocker le jeton de réinitialisation dans la base de données ou en mémoire (dans cet exemple, nous utilisons un Map)
                resetTokens.set(username, resetToken);

                // Redirect to home page
                // Envoyer l'e-mail de réinitialisation avec le lien contenant le jeton
                const resetURL = `http://localhost:3000/reset-password/${resetToken}`;
                const mailOptions = {
                    from: 'w.godin53@gmail.com',
                    to: email,
                    subject: 'Réinitialisation de mot de passe',
                    text: `Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant : ${resetURL}`
                };
                // Configuration du transporteur SMTP pour l'envoi des e-mails
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'w.godin53@gmail.com',
                        pass: 'zwewtqnxbanprlth'
                    }
                });
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Erreur lors de l\'envoi de l\'e-mail de réinitialisation :', error);
                        res.status(500).send('Une erreur est survenue lors de la réinitialisation du mot de passe.');
                    } else {
                        console.log('E-mail de réinitialisation envoyé :', info.response);
                        res.send('Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.');
                        res.redirect('/login');
                    }
                });

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