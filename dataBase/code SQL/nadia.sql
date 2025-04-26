begin transaction;

drop schema if exists projet_final cascade;

-- commit;

create schema projet_final;

set search_path to projet_final;

CREATE TABLE annulation
(
  id_annulation     int  NOT NULL,
  date_annulation   date NOT NULL,
  raison_annulation text NOT NULL,
  id_rdv            INT  NOT NULL,
  PRIMARY KEY (id_annulation)
);

CREATE TABLE compte_rendu
(
  id_compterendu int  NOT NULL,
  contenu_cr     text NOT NULL,
  date_redaction date NOT NULL,
  id_rdv         INT  NOT NULL,
  PRIMARY KEY (id_compterendu)
);

CREATE TABLE consulte
(
  id_consulte int not null,
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
  id_medecin     INT  NOT NULL,
  nom_medecin    text NOT NULL,
  prenom_medecin text NOT NULL,
  email_medecin  text NOT NULL,
  id_specialite  INT  NOT NULL,
  PRIMARY KEY (id_medecin)
);

CREATE TABLE notification
(
  id_notif    INT  NOT NULL,
  contenue    TEXT NOT NULL,
  date_envoie TIMESTAMP NOT NULL,
  id_patient  int  NOT NULL,
  PRIMARY KEY (id_notif)
);

CREATE TABLE patient
(
  id_patient        int  NOT NULL,
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
  id_plage    INT     NOT NULL,
  heure_debut TIMESTAMP    NOT NULL,
  heure_fin   TIMESTAMP    NOT NULL,
  disponible  BOOLEAN NOT NULL,
  id_medecin  INT     NOT NULL,
  id_consulter int	not null,
  PRIMARY KEY (id_plage)
);

CREATE TABLE rendez_vous
(
  id_rdv      INT     NOT NULL,
  confirm_rdv BOOLEAN NOT NULL DEFAULT false,
  id_plage    INT     NOT NULL,
  id_patient  int     NOT NULL,
  PRIMARY KEY (id_rdv)
);

CREATE TABLE specialite
(
  id_specialite  INT  NOT NULL,
  nom_specialite TEXT NOT NULL,
  PRIMARY KEY (id_specialite)
);

CREATE TABLE ville
(
  id_ville  INT  NOT NULL,
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

INSERT INTO specialite (id_specialite, nom_specialite) VALUES 
	(1, 'generale'),
	(2, 'familiale'),
	(3, 'endocrinologie'),
	(4, 'alergologue'),
	(5, 'orl'),
	(6, 'Chirurgien-dentiste')
;

INSERT INTO medecin (id_medecin, nom_medecin, prenom_medecin,email_medecin, id_specialite) VALUES 
	(1, 'Norris', 'Chuck', 'god@supergod.god', 1),
	(2, 'Tremblay', 'Tony', 'aaa@aaaaaa.aaa', 4),
	(3, 'Smith', 'John', 'bbbbb@bbbbbb.bbb', 5),
	(4, 'Pigeon', 'Alice', 'ccc@cccccc.ccc', 2)
;

INSERT INTO ville (id_ville, nom_ville) VALUES 
	(1, 'Quebec'),
	(2, 'Montreal'),
	(3, 'Sainte-Marie'),
	(4, 'Trois-Riviere'),
	(5, 'Alma'),
	(6, 'Chicoutimi'),
	(7, 'Saint-Nean')
;

INSERT INTO patient (id_patient, nom_patient, prenom_patient, email_patient, telephone_patient, remarque, id_ville) VALUES 
	(1, 'Bouchard', 'Bob', 'god@supergod.god', '111-1111-111', null, 2),
	(2, 'Tremblay', 'Annie', 'ddd@aaaaaa.aaa', '222-2222-222', 'Pas mal tanante.', 4),
	(3, 'Shark', 'Baby', 'ssss@lllll.lll', '333-3333-333', null, 5),
	(4, 'Lee', 'Bruce', 'lll@lllll.lll', '444-4444-444', 'Toujours en retard.', 2),
	(5, 'Monkey.D', 'Luffy', 'vogue@merry.op', '555-5555-555', 'Un peu srupide mais attachant.', 2)
;

Insert into consulte (id_consulte, type_consultation, id_medecin, id_ville) values
	(1, 0, 1,1),
	(2, 1, 3,2),
	(3, 1, 4,4)
;

Insert into plage_horaire (id_plage, heure_debut, heure_fin, disponible, id_medecin, id_consulter) values
	(1, '2023-05-01 09:00:00', '2023-05-01 10:00:00', true, 1, 1),
	(2, '2023-07-01 10:00:00', '2023-07-01 11:00:00', false, 3, 2),
	(3, '2023-05-01 09:00:00', '2023-05-01 10:00:00', true, 4, 3)
;

Insert into rendez_vous (id_rdv, confirm_rdv, id_plage, id_patient) values
	(1, true, 1, 5),
	(2, false, 2, 3),
	(3, true, 3, 2)
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
  R1 as (select * from medecin where id_medecin = 1),
  R2 as (select id_plage from plage_horaire p where p.id_medecin in (select id_medecin from R1) and p.disponible = true),
  R3 as (select * from rendez_vous r where r.id_plage in (select id_plage from R2))
select * from R3;



-- 2: Lister les médecins avec le nombre total de rendez-vous confirmés qu'ils ont effectués. 
with
  R1 as (select * from rendez_vous where confirm_rdv = true),
  R2 as (select * from plage_horaire p where p.id_plage in (select id_plage from R1)),
  R3 as (select * from medecin m where m.id_medecin in (select id_medecin from R2)),
  R4 as (select id_medecin, count(id_medecin) as nombre_rdv from R3 group by id_medecin)

select * from R4;



-- commit;

-- 9: Moyenne de rendez-vous par médecin par semaine. 
-- r1 ← σ WEEK(date_rdv)  (RENDEZ_VOUS) 
-- r2 ← 𝓐  id_medecin, week count_rdv ← count(∗)  (r1) 
-- r3 ← 𝓐 id_medecin, moyenne_rdv  ← avg(count_rdv)  (r2) 
-- r4 ← π id_medecin, moyenne_rdv (r3) 

 

-- 10: Liste des médecins qui n'ont aucun rendez-vous cette semaine. 
-- r1 ← σ WEEK(date_rdv) (RENDEZ_VOUS) 
-- r2 ← σ WEEK = WEEK current_date (r1) 
-- r3 ← π id_medecin (r2) 
-- r4 ← π id_medecin (MEDECIN) 
-- r5  ← r4 − r3 


---------------------------------------------------------------------------------
------------------------------------ NATACHA ------------------------------------
---------------------------------------------------------------------------------



---------------------------------------------------------------------------------
--------------------------------- JEAN-FRANCOIS ---------------------------------
---------------------------------------------------------------------------------











