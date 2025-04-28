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

/******************************************************************************/
/***                                  NATACHA                               ***/
/******************************************************************************/

/******************************************************************************/
/***                      données des médecins/docteurs                     ***/
/******************************************************************************/
function afficherCartes (){
    // const container = document.querySelector('.card-deck');
    const container = document.getElementById('doc-card-deck');
    container.innerHTML = "";
    // alert("Test: pause and load") // Pour test runs
    medecins.forEach(item => {
        container.innerHTML = container.innerHTML + `
        <div id="doc-card" class="card border-dark m-1 p-0">
            <img id="doc-card-pic" src="https://shorturl.at/RuFY9" class="card-img-top" alt="default">
            <div class="card-body position-relative">
                <h3 class="card-title mb-2">${item.nom}</h5>
                <div class="position-absolute bottom-0 pb-3">
                    <p class="lead mb-0">${item.specialite}</p>
                    <p class="card-text">${item.ville}</p>
                </div>
            </div>
            <div class="card-footer">
                <center>
                <button type="button" class="btn btn-primary" onclick="location.href='booking.html'">
                    Prendre rendez-vous
                </button>
                </center>
            </div>
        </div>
    `
    })
}

afficherCartes();

/*******************************************************************************/
/***                                 [WIP]                                   ***/
/*******************************************************************************/
// <-- x -->

/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/


