/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

function addMedecin()
{
    let nom_medecin = document.getElementById("inputNomCreation").value;
    let prenom_medecin = document.getElementById("inputPrenomCreation").value;
    let email_medecin = document.getElementById("email").value;
    let id_specialite = document.getElementById("id_specialite").value;

    console.log("nom_medecin: ", nom_medecin);
    console.log("prenom_medecin: ", prenom_medecin);
    console.log("email_medecin: ", email_medecin);
    console.log("id_specialite: ", id_specialite);

    fetch('http://localhost:3001/add_medecins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nom_medecin, prenom_medecin, email_medecin, id_specialite})
    })
    .then(response => response.json())
    .then(data => {
        console.log("data: ", data);
    });
}

/*******************************************************************************/
/***                                  NATACHA                                ***/
/*******************************************************************************/



/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/


