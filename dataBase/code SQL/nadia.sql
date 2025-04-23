begin transaction;
 
drop schema if exists projet_final cascade;
 
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
  type_consultation INT NOT NULL,
  id_medecin        INT NOT NULL,
  id_ville          INT NOT NULL
);

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
  date_envoie date NOT NULL,
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
  heure_debut date    NOT NULL,
  heure_fin   date    NOT NULL,
  disponible  BOOLEAN NOT NULL,
  id_medecin  INT     NOT NULL,
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

commit;

------------------------------------------------------------------------
















