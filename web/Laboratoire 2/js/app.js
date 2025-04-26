/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

fetch('http://localhost:3001/get_medecins')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('liste-medecins');
        console.log("data: ", data);

        data.forEach(medecins => {
            console.log("medecin: ", medecins);
            const div = document.createElement('div');
            div.className = 'card p-3 mb-2';
            div.innerHTML = `
                <h5>Nom: ${medecins.nom_medecin}</h5>
                <h5>Prenom : ${medecins.prenom_medecin}</h5>
            `;

        container.appendChild(div);
    });
});

/*******************************************************************************/
/***                                  NATACHA                                ***/
/*******************************************************************************/



/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/



