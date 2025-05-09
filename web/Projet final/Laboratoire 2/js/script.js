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
        if (data.message)
        {
            alert(data.message);
        }
        else
        {
            alert("Medecin ajouté avec succès");
        }
    });

    document.getElementById("inputNomCreation").value = "";
    document.getElementById("inputPrenomCreation").value = "";
    document.getElementById("email").value = "";
    document.getElementById("id_specialite").value = "";
    document.getElementById("inputMdpCreation").value = "";
    document.getElementById("inputMdpVerif").value = "";
}

/******************************************************************************/
/***                                  NATACHA                               ***/
/******************************************************************************/

/******************************************************************************/
/***                      données des médecins/docteurs                     ***/
/******************************************************************************/
function afficherCartes (){
    const container = document.getElementById("doc_card_deck");

    if (container == null)
    {
        return;
    }

    medecins.forEach(item => {
        container.innerHTML = container.innerHTML + `
        <div class="col-md-6 col-lg-3 col-lg-3 doc_card card border-dark m-1 p-0" style="display: block;">
            <img src="https://shorturl.at/RuFY9" class="doc_card_pic card-img-top" alt="default avatar picture">
            <div class="card-body position-relative">
                <h3 class="doc_card_nom card-title mb-2">${item.nom}</h3>
                <div>
                    <p class="doc_card_specialite lead mb-0">${item.specialite}</p>
                    <p class="doc_card_ville card-text">${item.ville}</p>
                </div>
            </div>
            <div class="card-footer position-relative">
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

/******************************************************************************/
/***                        Cartes Alphabetiques                            ***/
/******************************************************************************/
function sortCardsByName() {
    const cardDeck = document.getElementById('doc_card_deck');
    const cards = Array.from(cardDeck.getElementsByClassName('doc_card'));

    // Sort cards by name (or any other property you want)
    cards.sort((a, b) => {
        const nameA = a.querySelector('.doc_card_nom').textContent.trim().toLowerCase();
        const nameB = b.querySelector('.doc_card_nom').textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Clear the current card deck
    cardDeck.innerHTML = '';

    // Append the sorted cards back to the card deck
    cards.forEach(card => {
        cardDeck.appendChild(card);
    });
}

// sortCardsByName();
/******************************************************************************/
/***                            By Specialite                               ***/
/******************************************************************************/
const cardDeck = document.getElementById('doc_card_deck');

function filtreSpecialite() {
    sortCardsByName();

    const cardDeck = document.getElementById('doc_card_deck');
    const cards = Array.from(cardDeck.getElementsByClassName('doc_card'));

    // Group cards by specialty
    const groupedCards = {};
    cards.forEach(card => {
        const speciality = card.querySelector('.doc_card_specialite').textContent.trim();
        if (!groupedCards[speciality]) {groupedCards[speciality] = [];}
        groupedCards[speciality].push(card);
    });

    cardDeck.innerHTML = '';
    const sortedSpecialities = Object.keys(groupedCards).sort();

    // Create new rows for each specialty
    sortedSpecialities.forEach(speciality => {
        const specialityRow = document.createElement('div');
        specialityRow.className = 'row mb-4';

        // Create a header for the specialty
        const specialityHeader = document.createElement('h4');
        specialityHeader.textContent = speciality;
        specialityRow.appendChild(specialityHeader);

        // Append each card of the specialty to the row
        groupedCards[speciality].forEach(card => {specialityRow.appendChild(card);});

        // Append the specialty row to the card deck
        cardDeck.appendChild(specialityRow);
    });
}

/******************************************************************************/
/***                                By Ville                                ***/
/******************************************************************************/
function filtreVille() {
    sortCardsByName();

    const cardDeck = document.getElementById('doc_card_deck');
    const cards = Array.from(cardDeck.getElementsByClassName('doc_card'));

    // Group cards by town
    const groupedCards = {};
    cards.forEach(card => {
        const ville = card.querySelector('.doc_card_ville').textContent.trim();
        if (!groupedCards[ville]) {groupedCards[ville] = [];}
        groupedCards[ville].push(card);
    });

    cardDeck.innerHTML = '';
    const sortedSpecialities = Object.keys(groupedCards).sort();

    // Create new rows for each town
    sortedSpecialities.forEach(ville => {
        const villeRow = document.createElement('div');
        villeRow.className = 'row mb-4';

        // Create a header for the town
        const villeHeader = document.createElement('h4');
        villeHeader.textContent = ville;
        villeRow.appendChild(villeHeader);

        // Append each card of the town to the row
        groupedCards[ville].forEach(card => {villeRow.appendChild(card);});

        // Append the town row to the card deck
        cardDeck.appendChild(villeRow);
    });
}

/******************************************************************************/
/***                            Reset Filtres                               ***/
/******************************************************************************/
// Store the original order of the cards
let originalCards = [];

// Function to initialize the original card order
function initializeOriginalCards() {
    const cardDeck = document.getElementById('doc_card_deck');

    if (cardDeck == null)
    {
        return;
    }

    const cards = Array.from(cardDeck.getElementsByClassName('doc_card'));
    originalCards = cards.map(card => card.cloneNode(true)); // Clone the original cards
}

// Call the function to initialize the original cards when the page loads
document.addEventListener('DOMContentLoaded', initializeOriginalCards);

function resetCards() {
    const cardDeck = document.getElementById('doc_card_deck');
    cardDeck.innerHTML = ''; // Clear the current card deck

    // Append the original cards back to the card deck
    originalCards.forEach(card => {
        cardDeck.appendChild(card);
    });
}

/******************************************************************************/
/***                             searchbar                                  ***/
/******************************************************************************/
function searching() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    // const cards = document.querySelectorAll('#doc_card_deck .doc_card');

    const cardDeck = document.getElementById('doc_card_deck');
    const cards = Array.from(cardDeck.getElementsByClassName('doc_card'));

    cards.forEach(card => {
        const nom = card.querySelector('.doc_card_nom').textContent.toLowerCase();
        const ville = card.querySelector('.doc_card_ville').textContent.toLowerCase();
        const specialite = card.querySelector('.doc_card_specialite').textContent.toLowerCase();
        // const nom = card.getElementsByClassName('.doc_card_nom').textContent.toLowerCase();
        // const ville = card.getElementsByClassName('.doc_card_ville').textContent.toLowerCase();
        // const specialite = card.getElementsByClassName('.doc_card_specialite').textContent.toLowerCase();

        if (nom.includes(searchValue) || specialite.includes(searchValue) || ville.includes(searchValue)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}


/******************************************************************************/
/***                                 [WIP]                                  ***/
/******************************************************************************/
// <-- x -->

/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/


