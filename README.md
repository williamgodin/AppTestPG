Script PostgreSQL

Créer dans un premier temps la base de donnée sur postgres puis copié et executé le script ci-dessous


CREATE TABLE public.ca (
    id uuid NOT NULL,
    date timestamp with time zone NOT NULL,
    montant double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "vendeurId" integer,
    "regionId" integer
);

CREATE TABLE public.region (
    id integer NOT NULL,
    libelle character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


CREATE TABLE public."user" (
    id uuid NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


CREATE TABLE public.vendeur (
    id integer NOT NULL,
    nom character varying(255) NOT NULL,
    prenom character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('92e9165e-ee48-4ba5-994b-87679b1267e4', '2011-07-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3600, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('27f12609-151e-4028-8acb-1310e5e5773c', '2021-02-01 00:00:00+00', 259.116, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3500, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('4084a5de-ca20-4682-8e5e-0cb2e9e259ee', '2012-11-01 00:00:00+00', 33, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3300, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('1ce6d3c7-139a-4ab0-8967-4ed54910d6cc', '2020-12-01 00:00:00+00', 618.2022, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3300, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('88cd2060-a58b-49f9-b702-d2f228e58f6a', '2020-12-01 00:00:00+00', 618.2022, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3300, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('91176ef3-2908-4218-aac6-9a67921391fe', '2011-08-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('e246a044-b3aa-4051-a22d-8e9832de42dc', '2020-12-01 00:00:00+00', 105.27, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('6eb8b8ce-8dea-4aaa-a4b7-1719437b803a', '2020-12-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('d8536439-6ebf-41f5-bdc1-88839e856b01', '2020-12-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('28c6de6e-d49a-4855-ba09-e6b0c5c68329', '2020-12-01 00:00:00+00', 105.27, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 3000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('de1b9ddb-caae-4cd9-a92e-5e5c17f37610', '2021-02-01 00:00:00+00', 17.38, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 2800, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('4e458823-acbf-46d9-949e-d6a0b8af67e2', '2011-01-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 2700, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('ca31d5aa-d2d2-4046-a1aa-6bea62a786f0', '2021-02-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 2200, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('7177d2e4-a3ef-4423-87ff-65319c275239', '2021-02-01 00:00:00+00', 49.038, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 2200, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('6a89606e-e45d-40f9-9e5a-04159f459556', '2021-02-01 00:00:00+00', 57.475, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 2100, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('a9fa7247-024c-421a-9b3a-03ff79d2d248', '2011-02-01 00:00:00+00', 13.75, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 20000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('55ef220a-95f1-4686-9d64-57fbbe9d76d2', '2011-02-01 00:00:00+00', 25.333, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 20000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('083e77df-3327-42f1-a400-aacc7575e5cc', '2017-10-01 00:00:00+00', 47.058, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 1100, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('6393c59e-f37d-4c20-bb7a-e1fe75479bbc', '2015-10-01 00:00:00+00', -108.9, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 1100, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('66b5a1de-7971-4374-88ea-27a80c97406a', '2010-12-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 10000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('7a6b8fdd-5fc7-40b2-9b82-4c1f3d86b4d3', '2012-10-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 10000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('aa217d46-77bf-48fa-adb5-367f938d3309', '2011-09-01 00:00:00+00', 2812.007, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 10000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('c6a0e95f-7c63-496c-9270-d7465a1382c6', '2011-09-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 10000, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('fdd5c6ea-632c-4929-847a-004654ee1d38', '2013-08-01 00:00:00+00', 26776.706, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('698e970d-b132-4ab0-b422-3bcbfbb59e3c', '2013-08-01 00:00:00+00', 1569.326, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('a78f0e42-94c9-4298-bc7c-0cc1317c8f3f', '2013-08-01 00:00:00+00', 203.379, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('39add207-6004-470f-9292-97027dc3cf3f', '2013-08-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('a9a8f0d3-798d-46d0-b4a6-aae6d9ceab2b', '2016-06-01 00:00:00+00', 623.315, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('36f60361-f7bd-4343-86df-f156df3285da', '2016-06-01 00:00:00+00', 1704.56, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('022006d7-1259-4efc-8338-c0bd8bb164b6', '2016-06-01 00:00:00+00', 3066.14, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('64be2080-7650-45fc-9452-f176392ff80e', '2016-06-01 00:00:00+00', 186.219, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('93159427-18cc-4438-af59-7943a28a1b01', '2016-06-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 953, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('37900af9-55c1-4cc2-914e-19c8df78ca4b', '2011-06-01 00:00:00+00', 291230.214, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 952, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('5815f2b3-0528-4fbb-94c3-4769c7e2932d', '2011-06-01 00:00:00+00', 3360.61, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 952, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('5c84cb0a-2fb1-437c-ab66-170e51c5764a', '2011-07-01 00:00:00+00', 53.735, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('35853aad-798f-4da8-b413-9c3ccf739d2c', '2011-07-01 00:00:00+00', 63.019, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('580f1e8c-5d52-4e92-93aa-647346b501e2', '2011-07-01 00:00:00+00', 63.019, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('7a5fdfb9-dbb3-42ee-aebd-f91e1929bee6', '2011-07-01 00:00:00+00', 14.344, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('80c23245-bca9-4c53-8efa-40107a421be1', '2011-07-01 00:00:00+00', 1672.418, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('84b2b62b-04fe-49fd-948f-e202a689094c', '2012-04-01 00:00:00+00', 16844.828, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('9d85b7f5-d8e4-4ec9-872b-7f5fac9c438f', '2012-04-01 00:00:00+00', 18574.182, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('581b8a53-bee5-4e4f-bfb5-3ba8893cc26e', '2012-04-01 00:00:00+00', 88447.876, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('e1b01007-fcb9-42b7-b33e-fca11e191d35', '2012-04-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('0a12c602-fbae-4c03-913d-5113c6eaafcb', '2012-04-01 00:00:00+00', 0, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('4b6bc165-e05c-4f49-89ca-473e01cae5f4', '2015-02-01 00:00:00+00', 4601.564, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('6e58ddad-6a00-4cbf-b3ee-1ee8a944dfbb', '2017-07-01 00:00:00+00', 119.504, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('0b32d3c6-b504-4233-9c01-a69c27cbcd2f', '2018-04-01 00:00:00+00', 27915.789, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('531fccee-44e4-457d-908c-e85481407a33', '2018-04-01 00:00:00+00', 2445.003, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('d1276e7d-2bbf-4d44-9dcd-725847cd6631', '2018-04-01 00:00:00+00', 22, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('45b2f21d-e873-443a-9f98-5dc06f1ca34d', '2018-04-01 00:00:00+00', 6777.276, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 951, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('e4134b43-0326-42cd-98d7-3090f794eb82', '2019-10-01 00:00:00+00', 90247.223, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('3a9f7921-c314-4785-9979-b6971bd544e8', '2019-10-01 00:00:00+00', 6603.641, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('bd7c10d9-2d45-4e40-931d-e82e33472a42', '2019-10-01 00:00:00+00', 460772.191, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('74c9cb28-369c-4f6b-8474-18ca2ede0a6e', '2019-10-01 00:00:00+00', 460772.191, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('2f7c8a06-4820-48a7-ac56-0034490a7b10', '2019-10-01 00:00:00+00', 99608.476, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('7522a76a-1ac1-4838-9db6-0e868ef55c1c', '2019-10-01 00:00:00+00', 99608.476, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('aac2f037-ff67-4fc7-8565-3df1f16aac89', '2019-10-01 00:00:00+00', 35892.725, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('ee770f03-bf4c-4373-98da-f4c8385fb099', '2019-10-01 00:00:00+00', 48786.32, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('5b98ceef-67b6-419c-9960-a8bae6fabe13', '2019-10-01 00:00:00+00', 48786.32, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('8eaa2b2b-aaa1-4f3a-81bc-1fe6d27dd16f', '2019-10-01 00:00:00+00', 79336.29, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);
INSERT INTO public.ca (id, date, montant, "createdAt", "updatedAt", "vendeurId", "regionId") VALUES ('e1987381-b800-4bea-8617-0bd11ad66f2e', '2019-10-01 00:00:00+00', 460.845, '2023-06-26 07:01:34.171+00', '2023-06-26 07:01:34.171+00', 941, 1);... (2 MB left)
