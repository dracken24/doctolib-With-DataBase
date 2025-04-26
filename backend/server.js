const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3001, () => {
    console.log('Serveur en ligne sur http://localhost:3001');
});

/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

// Recuperer tout les medecins
app.get('/get_medecins', async (req, res) => {
    try 
    {
        console.log("Recuperation des medecins");
        const result = await pool.query('SELECT * FROM projet_final.medecin;');
        res.json(result.rows);
    }
    catch (err)
    {
        console.error("Erreur lors de la recuperation des medecins:", err);
        res.status(500).send('Erreur serveur');
    }
});

/*******************************************************************************/
/***                                  NATACHA                                ***/
/*******************************************************************************/



/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/



