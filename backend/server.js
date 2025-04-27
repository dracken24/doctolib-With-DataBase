const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('Serveur en ligne sur http://localhost:3001');
});

/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

// Recuperer tout les medecins
// app.get('/get_medecins', async (req, res) =>
// {
//     try 
//     {
//         console.log("Recuperation des medecins");
//         const result = await pool.query('SELECT * FROM projet_final.medecin;');
//         res.json(result.rows);
//         // for (let i = 0; i < result.rows.length; i++)
//         // {
//         //     console.log("result: ", result.rows[i]);
//         // }
//     }
//     catch (err)
//     {
//         console.error("Erreur lors de la recuperation des medecins:", err);
//         res.status(500).send('Erreur serveur');
//     }
// });

// Ajouter un medecin
app.post('/add_medecins', async (req, res) =>
{
    try 
    {
        let {nom_medecin, prenom_medecin, email_medecin, id_specialite} = req.body;

        // Verifier si le medecin existe deja
        const existingMedecin = await pool.query(
            'SELECT * FROM projet_final.medecin WHERE nom_medecin = $1 AND prenom_medecin = $2 AND email_medecin = $3 AND id_specialite = $4',
            [nom_medecin, prenom_medecin, email_medecin, id_specialite]
        );

        if (existingMedecin.rows.length > 0)
        {
            return res.status(400).json({ message: 'Médecin déjà existant' });
        }

        // Ajouter le nouveau medecin
        const newMedecin = await pool.query(
            'INSERT INTO projet_final.medecin (nom_medecin, prenom_medecin, email_medecin, id_specialite) VALUES ($1, $2, $3, $4) RETURNING *',
            [nom_medecin, prenom_medecin, email_medecin, id_specialite]
        );
        
        res.json(newMedecin.rows[0]);
    }
    catch (err)
    {
        console.error("Erreur lors de l'ajout du médecin:", err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

/*
    medecin: id_medecin, nom_medecin, prenom_medecin, email_medecin, id_specialite
*/

/*******************************************************************************/
/***                                  NATACHA                                ***/
/*******************************************************************************/



/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/



