-- Réinitialiser la séquence pour la table medecin
SELECT setval('projet_final.medecin_id_medecin_seq', (SELECT MAX(id_medecin) FROM projet_final.medecin), true); 