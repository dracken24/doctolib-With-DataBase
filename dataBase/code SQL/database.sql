begin transaction;

drop schema if exists projet_final cascade;

-- commit;

create schema projet_final;

set search_path to projet_final;

CREATE TABLE annulation
(
	id_annulation     SERIAL NOT NULL,
	date_annulation   date NOT NULL,
	raison_annulation text NOT NULL,
	id_rdv            INT  NOT NULL,
	PRIMARY KEY (id_annulation)
);

CREATE TABLE compte_rendu
(
	id_compterendu SERIAL NOT NULL,
	contenu_cr     text NOT NULL,
	date_redaction date NOT NULL,
	id_rdv         INT  NOT NULL,
	PRIMARY KEY (id_compterendu)
);

CREATE TABLE consulte
(
	id_consulte SERIAL NOT NULL,
	type_consultation INT NOT NULL,
	id_medecin        INT NOT NULL,
	id_ville          INT NOT NULL,
	PRIMARY KEY (id_consulte)
);
-- type_consultation:
--		sur place = 0
--		par telephone = 1

CREATE TABLE medecin
(
	id_medecin     SERIAL NOT NULL,
	nom_medecin    text NOT NULL,
	prenom_medecin text NOT NULL,
	email_medecin  text NOT NULL,
	id_specialite  INT  NOT NULL,
	PRIMARY KEY (id_medecin)
);

CREATE TABLE notification
(
	id_notif    SERIAL NOT NULL,
	contenue    TEXT NOT NULL,
	date_envoie TIMESTAMP NOT NULL,
	id_patient  int  NOT NULL,
	PRIMARY KEY (id_notif)
);

CREATE TABLE patient
(
	id_patient        SERIAL NOT NULL,
	nom_patient       TEXT NOT NULL,
	prenom_patient    TEXT NOT NULL,
	email_patient     TEXT NOT NULL,
	telephone_patient TEXT NOT NULL,
	remarque          text,
	id_ville          INT  NOT NULL,
	PRIMARY KEY (id_patient)
);

CREATE TABLE plage_horaire
(
	id_plage    SERIAL NOT NULL,
	heure_debut TIMESTAMP    NOT NULL,
	heure_fin   TIMESTAMP    NOT NULL,
	disponible  BOOLEAN NOT NULL,
	id_medecin  INT     NOT NULL,
	id_consulter int	not null,
	PRIMARY KEY (id_plage)
);

CREATE TABLE rendez_vous
(
	id_rdv      SERIAL NOT NULL,
	confirm_rdv BOOLEAN NOT NULL DEFAULT false,
	id_plage    INT     NOT NULL,
	id_patient  int     NOT NULL,
	PRIMARY KEY (id_rdv)
);

CREATE TABLE specialite
(
	id_specialite  SERIAL  NOT NULL,
	nom_specialite TEXT NOT NULL,
	PRIMARY KEY (id_specialite)
);

CREATE TABLE ville
(
	id_ville  SERIAL  NOT NULL,
	nom_ville TEXT NOT NULL,
	PRIMARY KEY (id_ville)
);

commit;

-------------------------------------------------------------------------------

begin transaction;

set search_path to projet_final;

ALTER TABLE medecin
	ADD CONSTRAINT FK_specialite_TO_medecin
		FOREIGN KEY (id_specialite)
		REFERENCES specialite (id_specialite);

ALTER TABLE consulte
	ADD CONSTRAINT FK_medecin_TO_consulte
		FOREIGN KEY (id_medecin)
		REFERENCES medecin (id_medecin);

ALTER TABLE consulte
	ADD CONSTRAINT FK_ville_TO_consulte
		FOREIGN KEY (id_ville)
		REFERENCES ville (id_ville);

ALTER TABLE plage_horaire
	ADD CONSTRAINT FK_medecin_TO_plage_horaire
		FOREIGN KEY (id_medecin)
		REFERENCES medecin (id_medecin);

ALTER TABLE patient
	ADD CONSTRAINT FK_ville_TO_patient
		FOREIGN KEY (id_ville)
		REFERENCES ville (id_ville);

ALTER TABLE rendez_vous
	ADD CONSTRAINT FK_plage_horaire_TO_rendez_vous
		FOREIGN KEY (id_plage)
		REFERENCES plage_horaire (id_plage);

ALTER TABLE compte_rendu
	ADD CONSTRAINT FK_rendez_vous_TO_compte_rendu
		FOREIGN KEY (id_rdv)
		REFERENCES rendez_vous (id_rdv);

ALTER TABLE annulation
	ADD CONSTRAINT FK_rendez_vous_TO_annulation
		FOREIGN KEY (id_rdv)
		REFERENCES rendez_vous (id_rdv);

ALTER TABLE rendez_vous
	ADD CONSTRAINT FK_patient_TO_rendez_vous
		FOREIGN KEY (id_patient)
		REFERENCES patient (id_patient);

ALTER TABLE notification
	ADD CONSTRAINT FK_patient_TO_notification
		FOREIGN KEY (id_patient)
		REFERENCES patient (id_patient);

ALTER TABLE plage_horaire
	ADD CONSTRAINT FK_consulter_TO_plage_horaire
		FOREIGN KEY (id_consulter)
		REFERENCES consulte (id_consulte);

commit;

------------------------------------------------------------------------

INSERT INTO specialite (nom_specialite) VALUES 
	('generale'),
	('familiale'),
	('endocrinologie'),
	('alergologue'),
	('orl'),
	('Chirurgien-dentiste')
;

INSERT INTO medecin (nom_medecin, prenom_medecin,email_medecin, id_specialite) VALUES 
	('Norris', 'Chuck', 'god@supergod.god', 1),
	('Tremblay', 'Tony', 'aaa@aaaaaa.aaa', 4),
	('Smith', 'John', 'bbbbb@bbbbbb.bbb', 5),
	('Pigeon', 'Alice', 'ccc@cccccc.ccc', 2)
;

INSERT INTO ville (nom_ville) VALUES 
	('Quebec'),
	('Montreal'),
	('Sainte-Marie'),
	('Trois-Riviere'),
	('Alma'),
	('Chicoutimi'),
	('Saint-Nean')
;

INSERT INTO patient (nom_patient, prenom_patient, email_patient, telephone_patient, remarque, id_ville) VALUES 
	('Bouchard', 'Bob', 'god@supergod.god', '111-1111-111', null, 2),
	('Tremblay', 'Annie', 'ddd@aaaaaa.aaa', '222-2222-222', 'Pas mal tanante.', 4),
	('Shark', 'Baby', 'ssss@lllll.lll', '333-3333-333', null, 5),
	('Lee', 'Bruce', 'lll@lllll.lll', '444-4444-444', 'Toujours en retard.', 2),
	('Monkey.D', 'Luffy', 'vogue@merry.op', '555-5555-555', 'Un peu srupide mais attachant.', 2)
;

Insert into consulte (type_consultation, id_medecin, id_ville) values
	(0, 1,1),
	(1, 3,2),
	(1, 4,4)
;

Insert into plage_horaire (heure_debut, heure_fin, disponible, id_medecin, id_consulter) values
	('2023-05-01 09:00:00', '2023-05-01 10:00:00', true, 1, 1),
	('2023-07-01 10:00:00', '2023-07-01 11:00:00', false, 3, 2),
	('2023-07-02 10:00:00', '2023-07-02 11:00:00', true, 3, 2),
	('2023-05-01 09:00:00', '2023-05-01 10:00:00', true, 4, 3),
	('2023-06-01 09:00:00', '2023-06-01 10:00:00', true, 1, 1),
	('2023-08-01 10:00:00', '2023-08-01 11:00:00', false, 3, 2),
	('2023-08-02 10:00:00', '2023-08-02 11:00:00', true, 3, 2),
	('2023-06-01 09:00:00', '2023-06-01 10:00:00', true, 4, 3)
;

Insert into rendez_vous (confirm_rdv, id_plage, id_patient) values
	(true, 1, 5),
	(false, 2, 3),
	(true, 3, 3),
	(true, 4, 2),
	(true, 5, 5),
	(false, 6, 3),
	(true, 7, 3),
	(true, 8, 2)
;

select * from annulation;
select * from compte_rendu;
select * from consulte;
select * from medecin;
select * from notification;
select * from patient;
select * from plage_horaire;
select * from rendez_vous;
select * from specialite;
select * from ville;

---------------------------------------------------------------------------------
------------------------------------- NADIA -------------------------------------
---------------------------------------------------------------------------------

-- 1: Rechercher les rendez-vous confirmés à venir pour un médecin donné. 

with
	-- Selectionner un medecin en particulier
	r1 as (select * from medecin where id_medecin = 1),
	-- Chercher toutes les plages disponible pour ce medecin
	r2 as (select id_plage from plage_horaire p
			where p.id_medecin in (select id_medecin from r1)
		and p.disponible = true),
	-- Rechercher les rendez-vous correspondant aux plages de ce medecin
	r3 as (select * from rendez_vous r where r.id_plage in (select id_plage from r2))
select * from r3;



-- 2: Lister les médecins avec le nombre total de rendez-vous confirmés qu'ils ont effectués. 
with
	-- Trouver tout les rendez-vous confirme
	r1 as (select * from rendez_vous where confirm_rdv = true),
	-- Trouver les plages horraires correspondantes aux rendez-vous de R1
	r2 as (select * from plage_horaire p
			where p.id_plage in (select id_plage from r1)),
	-- Trouver les medecins correspondant aux rendez-vous de r2
	r3 as (select * from medecin m
			where m.id_medecin in (select id_medecin from r2)),
	-- Compter le nombre de rdv et grouper par medecin
	r4 as (select id_medecin,
			count(id_medecin) as nombre_rdv
		from r3 group by id_medecin),
	-- Select tout des medecin trouver et ajouter la colonne nombre_rdv
	r5 as (select m.*, r4.nombre_rdv from medecin m join r4 on m.id_medecin = r4.id_medecin)

select * from r5;



-- 9: Moyenne de rendez-vous par médecin par semaine. 
with
	-- Prendre plage_horaire par annee et semaine
	r1 as (select id_medecin,
			extract(year from heure_debut) as annee,
			extract(week from HEURE_DEBUT) as semaine
		from plage_horaire),
	-- Compter les rendez-vous par medecin par semaine.
	r2 as (select p_h.id_medecin,
			extract(year from p_h.heure_debut) AS annee,
			extract(week from p_h.heure_debut) AS semaine,
				count(r_v.id_rdv) AS nb_rdv
			from plage_horaire p_h
		left join rendez_vous r_v
				on r_v.id_plage = p_h.id_plage
			group by p_h.id_medecin, annee, semaine),
	-- Faire la moyenne de toutes les semaines
	r3 as (select id_medecin,
				avg(nb_rdv) as moyenne_rdv
			from r2
			group by id_medecin)
		
select * from r3
order by id_medecin;



-- 10: Liste des médecins qui n'ont aucun rendez-vous cette semaine. 
with
	-- Grouper plage_horraire en annee et semaine
	r1 as (select id_medecin,
			extract(year from heure_debut) as annee,
			extract(week from HEURE_DEBUT) as semaine
		from plage_horaire),
	-- Choisire une anne et une semaine particuliere (semaine en cours ou semaine precise)
	r2 as (select * from r1
		where annee = '2023' and semaine = 31),
	-- Medecin trouver (r2) - table medecin
	r3 as (select * from medecin
		where id_medecin not in (select id_medecin from r2))
		
select * from r3;



---------------------------------------------------------------------------------
------------------------------------ NATACHA ------------------------------------
---------------------------------------------------------------------------------

-- 6: Historique des notifications envoyées à un patient spécifique.
Insert into notification (contenue, date_envoie, id_patient) values
	('RDV 3','2023-06-25 10:30:00', 3),
	('RDV 4','2023-04-26 11:00:00', 2),
	('RDV 8','2023-05-25 12:00:00', 2);

select * from notification where id_patient = 2;



-- 7: Liste des rendez-vous sans compte rendu médical.
Insert into compte_rendu (contenu_cr, date_redaction, id_rdv) values
	('Bien','2023-06-01 10:00:00', 5),
	('Warning','2023-07-02 11:00:00', 3);

SELECT * FROM RENDEZ_VOUS WHERE id_rdv NOT IN (SELECT id_rdv FROM COMPTE_RENDU);



-- 8: Les patients ayant annulé plus de 2 fois.
Insert into rendez_vous (confirm_rdv, id_plage, id_patient) values
	(false, 7, 5),
	(false, 7, 3),
	(false, 7, 5);

WITH
-- Afficher les RDVs annulés
r1 AS (SELECT * FROM RENDEZ_VOUS WHERE confirm_rdv = false),
-- Afficher les ID des patients avec leurs nombres de RDVs annulés
r2 AS (SELECT id_patient, COUNT(confirm_rdv) AS nb_rdv_annule FROM r1 GROUP BY id_patient),
-- Afficher patients ayant annulé plus de 2 fois.
r3 AS (SELECT id_patient FROM r2 WHERE nb_rdv_annule > 2)
-- Afficher la liste des patients ayant annulé plus de 2 fois.
SELECT * FROM PATIENT JOIN r3 ON PATIENT.id_patient = r3.id_patient;


---------------------------------------------------------------------------------
--------------------------------- JEAN-FRANCOIS ---------------------------------
---------------------------------------------------------------------------------

--2 :Trouver les créneaux disponibles pour un médecin donné à une date donnée. 


with
    -- Sélectionner les plages disponibles pour un médecin donné à une date donnée
    r1 as (
        select * from plage_horaire
        where id_medecin = 2
        and disponible = true
        and date(heure_debut) = '2023-05-01'
    ),
    -- Trouver les rendez-vous qui occupent ces plages
    r2 as (
        select * from rendez_vous
        where id_plage in (select id_plage from r1)
    ),
    -- Identifier les plages déjà prises
    r3 as (
        select r1.* from r1
        join r2 on r1.id_plage = r2.id_plage
    ),
    -- Soustraire les plages prises
    r4 as (
        select * from r1
        where id_plage not in (select id_plage from r3)
    ),
    -- Extraire uniquement les infos pertinentes
    r5 as (
        select id_plage, heure_debut, heure_fin from r4
    )
select * from r5;



-- 3: Lister tous les rendez-vous annulés avec la date et la raison d’annulation. 


insert into annulation (date_annulation, raison_annulation, id_rdv)
values ('2025-05-01', 'Le patient a mangé trop de poutine', 1);

with
    -- Faire la jointure entre rendez_vous et annulation via id_rdv
    r1 as (
        select * from rendez_vous
        join annulation using (id_rdv)
    ),
    -- Sélectionner seulement les colonnes demandées
    r2 as (
        select id_rdv, date_annulation, raison_annulation from r1
    )
select * from r2;



-- 4 : Retrouver tous les patients qui ont pris au moins 3 rendez-vous avec le même médecin. 

with
    -- Compter le nombre de RV entre patient et Md
    r1 as (
        select rv.id_patient, ph.id_medecin, count(rv.id_rdv) as nb_rdv
        from rendez_vous rv
        join plage_horaire ph on rv.id_plage = ph.id_plage
        group by rv.id_patient, ph.id_medecin
    ),
    -- Garder seulement ceux avec au moins 3 rendez-vous
    r2 as (
        select * from r1
        where nb_rdv >= 3
    ),
    -- Ajouter les informations sur les patients
    r3 as (
        select r2.*, p.nom_patient, p.prenom_patient
        from r2
        join patient p on r2.id_patient = p.id_patient
    ),
    -- Sélectionner les colonnes finales
    r4 as (
        select id_patient, nom_patient, prenom_patient, id_medecin, nb_rdv from r3
    )
select * from r4;











