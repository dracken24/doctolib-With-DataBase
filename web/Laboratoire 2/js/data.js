/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

/*******************************************************************************/
/***                       NavBar pour toutes les pages                      ***/
/*******************************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter la classe sticky-footer au body
    document.body.classList.add('sticky-footer');

    document.getElementById('appBar').innerHTML = `
        <nav class="navbar bg-dark navbar-dark navbar-expand-md p-3">
            <div class="container col-12">
                <div class="row w-100 align-items-center">
                    <!-- Colonne de gauche : Logo et nom -->
                    <div class="col-md-3">
                        <div class="d-flex align-items-center">
                            <a href="index.html">
                                <img src="https://img.myloview.fr/images/logo-medecin-medecine-400-70576989.jpg" alt="logo" height="58" class="logo me-3 rounded-circle border">
                            </a>
                            <a class="navbar-brand" href="index.html">Mini Doctolib</a>
                        </div>
                    </div>
                    
                    <!-- Colonne centrale : Slogan uniquement -->
                    <div class="col-md-6 text-center">
                        <!-- Slogan visible uniquement sur grands écrans -->
                        <img src="assets/img/slogan.png" height="58px" class="d-none d-lg-block mx-auto">
                    </div>
                    
                    <!-- Colonne de droite : Menu -->
                    <div class="col-md-3">
                        <div class="collapse navbar-collapse d-flex justify-content-end">
                            <!-- Menu déroulant visible sur écrans moyens et petits -->
                            <div class="dropdown d-md-block d-lg-none me-2">
                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="index.html">Accueil</a></li>
                                    <li><a class="dropdown-item" href="contact.html">Contact</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="doctors.html">Liste des médecins</a></li>
                                    <li><a class="dropdown-item" href="booking.html">Prendre un rendez-vous</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#connexion" href="#">Connexion</a></li>
                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#creation-account" href="#">Creer un compte</a></li>
                                </ul>
                            </div>
                            
                            <ul class="navbar-nav d-none d-lg-flex">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Accueil</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>

                                <li class="dropdown">
                                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item mb-2"><a class="dropdown-item" href="doctors.html">Liste des médecins</a></li>
                                        <li class="nav-item mb-2"><a class="dropdown-item" href="booking.html">Prendre un rendez-vous</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Profil</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#connexion" href="#">Connexion</a></li>
                                        <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#creation-account" href="#">Creer un compte</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button id="darkModeToggle" class="btn btn-light position-fixed top-0 end-0 m-3" style="z-index:9999;">
                <i id="darkModeIcon" class="fas fa-moon"></i>
            </button>
        </nav>
    `;
});

/*******************************************************************************/
/***                       FootBar pour toutes les pages                      ***/
/*******************************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footBar').innerHTML = `
        <div class="footer-container bg-dark text-white mt-auto">
            <footer class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                        <h5>Accueil</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-white">Accueil</a></li>
                            <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-white">Contact</a></li>
                        </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                        <h5>Services</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="doctors.html" class="nav-link p-0 text-white">Liste des médecins</a></li>
                            <li class="nav-item mb-2"><a href="booking.html" class="nav-link p-0 text-white">Prendre un rendez-vous</a></li>
                        </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                        <h5>Profil</h5>
                        <ul class="nav flex-column">


                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white" data-bs-toggle="modal" data-bs-target="#connexion">Connexion</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white" data-bs-toggle="modal" data-bs-target="#creation-account">Creer un compte</a></li>
                        </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Inscrivez-vous à notre infolettre</h5>
                            <p>Recevez chaque mois, ce qui est nouveau et excitant de nous.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary" type="button">S'abonner</button>
                            </div>
                        </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2025 Mini Doctolib, Inc. All rights reserved. (school project)</p>
                        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li class="ms-3"><a class="text-white bg-light p-2 rounded-circle icon-link" href="https://x.com/home" target="blank"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                            <li class="ms-3"><a class="text-white bg-light p-2 rounded-circle icon-link" href="https://www.instagram.com/" target="blank"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                            <li class="ms-3"><a class="text-white bg-light p-2 rounded-circle icon-link" href="https://www.facebook.com/" target="blank"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    `;
});

/*******************************************************************************/
/***              Integration social icons pour toutes les pages             ***/
/*******************************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('socialIcons').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </symbol>
    </svg>
    `;
});

/*******************************************************************************/
/***                    Modal pour la connexion au compte                    ***/
/*******************************************************************************/

// Loader le modal au lancement de la page
document.addEventListener('DOMContentLoaded', function(e) {
    // console.log("Click sur : ", e.target.tagName);

    document.getElementById('connexion').innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content p-1">
                <!-- Header -->
                <div class="modal-header bg-dark">
                    <h3 class="modal-title text-white">Connexion</h3>
                    <button class="btn btn-close bg-white" data-bs-dismiss="modal"></button>
                </div>
                <!-- Body -->
                <div class="modal-body p-0 d-flex flex-column">
                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Nom utilisateur:</strong></label>
                        <input id="inputNomConnexion" type="text" class="form-control" placeholder="Entrez le nom" required>
                    </div>
                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Mot de passe:</strong></label>
                        <input id="inputMdpConnexion" type="password" class="form-control" placeholder="Entrez le mot de passe" required>
                    </div>
                </div>
                <!-- Footer -->
                <div class="modal-footer bg-dark text-white">
                    <button class="btn btn-danger m-2" data-bs-dismiss="modal">Fermer</button>
                    <button class="btn btn-success m-2" data-bs-toggle="modal">Connexion</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('creation-account').innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content p-1">
                <!-- Header -->
                <div class="modal-header bg-dark">
                    <h3 class="modal-title text-white">Creation de compte utilisateur Medecin</h3>
                    <button class="btn btn-close bg-white" data-bs-dismiss="modal"></button>
                </div>
                <!-- Body -->
                <div class="modal-body p-0 d-flex flex-column">

                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Nom du Medecin:</strong></label>
                        <input id="inputNomCreation" type="text" class="form-control" placeholder="Entrez le nom" required>
                    </div>

                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Prenom du Medecin:</strong></label>
                        <input id="inputPrenomCreation" type="text" class="form-control" placeholder="Entrez le nom" required>
                    </div>

                    <div class="col-12 p-2 d-flex">
                        <label for="inputMdpCreation" class="form-label align-self-center col-3"><strong>Mot de passe:</strong></label>
                        <input id="inputMdpCreation" type="password" class="form-control" placeholder="Entrez le mot de passe" required>
                    </div>

                    <ul id="passwordCriteria">
                        <li class="text-danger" id="lenCriteria">Au moins 8 characteres</li>
                        <li class="text-danger" id="upperCriteria">1 Majuscule</li>
                        <li class="text-danger" id="lowerCriteria">1 Minuscule</li>
                        <li class="text-danger" id="digitCriteria">1 chiffre</li>
                        <li class="text-danger" id="specialCriteria">1 charactere special</li>
                    </ul>

                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Comfirmation Mot de passe:</strong></label>
                        <input id="inputMdpVerif" type="password" class="form-control" placeholder="Entrez le mot de passe" required>
                    </div>

                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Email:</strong></label>
                        <input id="email" type="email" class="form-control" placeholder="Entrez votre email" required>
                    </div>
                    <div class="col-12 p-2 d-flex">
                        <label class="form-label align-self-center col-3"><strong>Specialite:</strong></label>
                        <select id="id_specialite" class="form-control" required>

                            <option value="">Sélectionnez une spécialité</option>
                            <option value="1">Médecin généraliste</option>
                            <option value="2">Médecine Familiale</option>
                            <option value="3">Endocrinologie</option>
                            <option value="4">Alergologue</option>
                            <option value="5">ORL</option>
                            <option value="6">Chirurgien-dentiste</option>
            
                        </select>
                    </div>
                </div>
                <!-- Footer -->
                <div class="modal-footer bg-dark text-white">
                    <button class="btn btn-danger m-2" data-bs-dismiss="modal">Fermer</button>
                    <button class="btn btn-success m-2" onclick="addMedecin()" data-bs-toggle="modal">Creer un compte</button>
                </div>
            </div>
        </div>
    `;

    // Initialiser la vérification du mot de passe après la création des éléments
    const mdp = document.getElementById("inputMdpCreation");
    
    const criteria = {
        len : document.getElementById("lenCriteria"),
        upper : document.getElementById("upperCriteria"),
        lower : document.getElementById("lowerCriteria"),
        digit : document.getElementById("digitCriteria"),
        special : document.getElementById("specialCriteria"),
    };

    function MAJColorCriteria(ele, isValid)
    {
        ele.classList.toggle('text-success', isValid);
        ele.classList.toggle('text-danger', !isValid);
    }

    mdp.addEventListener('input', () =>
    {
        const monMdp = mdp.value;
        MAJColorCriteria(criteria.len, monMdp.length >= 8);
        MAJColorCriteria(criteria.upper, /[A-Z]/.test(monMdp));
        MAJColorCriteria(criteria.lower, /[a-z]/.test(monMdp));
        MAJColorCriteria(criteria.digit, /[0-9]/.test(monMdp));
        MAJColorCriteria(criteria.special, /[^A-Za-z0-9]/.test(monMdp));
    });
});


/******************************************************************************/
/***                      données des médecins/docteurs                     ***/
/******************************************************************************/
const medecins = [
{
id: 1,
    nom: "Dr. Aymen Rabah",
specialite: "Diabétologue",
ville: "Montréal",
disponibilites: {
"2025-04-10": ["09:00", "10:00", "14:00"],
"2025-04-11": ["11:00", "15:30"],
}
},
{
id: 2,
    nom: "Dr. Danielle Nicole Jones",
specialite: "Gynécologue",
ville: "Montréal",
disponibilites: {
"2025-04-07": ["10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30"],
"2025-04-08": ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
"2025-04-09": ["10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30"],
"2025-04-10": ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
"2025-04-11": ["10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30"],
}
},
{
id: 3,
    nom: "Dr. Martine Hubert",
specialite: "Médecin généraliste",
ville: "Boucherville",
disponibilites: {
"2025-04-07": ["12:00", "15:00"],
"2025-04-08": ["10:00", "12:00", "13:00", "14:00"],
"2025-04-09": ["10:00", "12:00", "13:00", "14:00", "15:00"],
"2025-04-10": ["12:00", "14:00", "15:00"],
"2025-04-11": ["10:00", "11:00", "12:00", "13:00"],
}
},
{
id: 4,
    nom: "Dr. Natacha Meyer",
specialite: "Gynécologue",
ville: "Boucherville",
disponibilites: {
"2025-04-12": ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
"2025-04-13": ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
}
},
{
id: 5,
    nom: "Dr. Nadia Desjardins",
specialite: "Ostéopathe",
ville: "Laval",
disponibilites: {
"2025-04-07": ["09:00", "09:30"],
"2025-04-09": ["11:00", "11:30"],
"2025-04-11": ["13:00", "13:30"],
"2025-04-13": ["15:00", "15:30"],
}
},
{
id: 6,
    nom: "Dr. Jean-François Lefebvre",
specialite: "Médecin généraliste",
ville: "Montréal",
disponibilites: {
"2025-04-08": ["10:00", "10:30", "12:00", "12:30"],
"2025-04-10": ["12:30", "14:00", "14:30", "16:00"],
"2025-04-12": ["16:00", "16:30"],
}
}
];


/******************************************************************************/
/***                                  NATACHA                               ***/
/******************************************************************************/

/*******************************************************************************/
/***                                 [WIP]                                   ***/
/*******************************************************************************/
// <-- x -->

/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/

document.addEventListener('DOMContentLoaded', () =>{
    //  Gestion du Dark Mode
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkModeIcon');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    }

    toggleBtn?.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('darkMode', isDark);
    });

    //  Fonction utilitaire pour normaliser les chaînes
    function normalizeString(str) {
    return str
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/\s+/g, '-');
    }

    //  Sélecteurs du formulaire
const selectSpecialite = document.getElementById('specialite');
const selectMedecin = document.getElementById('medecin');
const selectDate = document.getElementById('date');
const selectHeure = document.getElementById('heure');
const messageErreur = document.createElement('p');
messageErreur.className = 'text-danger mt-2';
selectHeure?.parentElement?.appendChild(messageErreur);

if (selectSpecialite == null)
{
    // console.log("selectSpecialite is null");
    return;
}

//  Nettoyage du formulaire au chargement
selectSpecialite.innerHTML = '<option value="">Sélectionnez une spécialité</option>';
selectMedecin.innerHTML = '<option value="">Sélectionnez un médecin</option>';
selectDate.value = '';
selectHeure.innerHTML = '';
messageErreur.textContent = '';
localStorage.removeItem('medecin_id');
// console.log("***************************************");



    //  Générer dynamiquement les spécialités
    const specialitesUniques = [...new Set(medecins.map(m => m.specialite))];
    selectSpecialite.innerHTML = '<option value="">Sélectionnez une spécialité</option>';
    specialitesUniques.forEach(spe => {
    const option = document.createElement('option');
    option.value = normalizeString(spe);
    option.textContent = spe;
    selectSpecialite.appendChild(option);
    });

    //  Filtrer les médecins selon la spécialité
    selectSpecialite.addEventListener('change', () => {
    const specialiteChoisie = selectSpecialite.value;
    selectMedecin.innerHTML = '<option value="">Sélectionnez un médecin</option>';
    selectDate.innerHTML = '<option value="">Sélectionnez une date</option>';
    selectHeure.innerHTML = '<option value="">Sélectionnez une heure</option>';
    messageErreur.textContent = '';

    const medecinsFiltres = medecins.filter(m => normalizeString(m.specialite) === specialiteChoisie);
    medecinsFiltres.forEach(m => {
        const option = document.createElement('option');
        option.value = m.id;
        option.textContent = m.nom;
        selectMedecin.appendChild(option);
    });
    });

    //  Afficher les dates disponibles selon le médecin
    selectMedecin.addEventListener('change', () => {
    const idMedecin = parseInt(selectMedecin.value);
    const med = medecins.find(m => m.id === idMedecin);

    selectDate.innerHTML = '<option value="">Sélectionnez une date</option>';
    selectHeure.innerHTML = '<option value="">Sélectionnez une heure</option>';
    messageErreur.textContent = '';

    if (med) {
        const dates = Object.keys(med.disponibilites);
        dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.textContent = date;
        selectDate.appendChild(option);
        });
    }
    });

    //  Afficher les horaires disponibles pour une date donnée
    selectDate.addEventListener('change', () => {
    const idMedecin = parseInt(selectMedecin.value);
    const dateChoisie = selectDate.value;
    const med = medecins.find(m => m.id === idMedecin);

    selectHeure.innerHTML = '<option value="">Sélectionnez une heure</option>';
    messageErreur.textContent = '';

    if (med && med.disponibilites[dateChoisie]) {
        let heures = med.disponibilites[dateChoisie];
        const rdvOccupees = JSON.parse(localStorage.getItem("rdv_occupees")) || {};
        const heuresPrises = rdvOccupees[idMedecin]?.[dateChoisie] || [];
        
        heures = heures.filter(h => !heuresPrises.includes(h));
        heures.forEach(h => {
        const option = document.createElement('option');
        option.value = h;
        option.textContent = h;
        selectHeure.appendChild(option);
        });
        if (heures.length === 0) {
            messageErreur.textContent = 'Tous les créneaux sont déjà pris pour cette date.';
        }
        
    } else {
        messageErreur.textContent = 'Aucune plage horaire disponible pour cette date.';
    }
    });

    

    //  Gestion du bouton "Confirmer"
const boutonConfirmer = document.querySelector('button.btn-success[data-bs-target="#confirmation"]');

if (boutonConfirmer) {
    boutonConfirmer.addEventListener('click', (e) => {
    
    // Récupère les valeurs
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('emailbooking').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const specialite = document.getElementById('specialite').value;
    const medecin = document.getElementById('medecin').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;
    const message = document.getElementById('message').value.trim();

    // Vérifie si un champ est vide
    if (!nom || !prenom || !email || !tel || !specialite || !medecin || !date || !heure || !message) {
        alert("Merci de remplir tous les champs !");
        e.preventDefault(); // Empêche la redirection
        return;
    }

    const rendezVous = {
        nom,
        prenom,
        email,
        tel,
        specialite,
        medecin,
        date,
        heure,
        message
    };
    
    // Récupérer la liste actuelle
    const anciensRdv = JSON.parse(localStorage.getItem('rendezvous')) || [];
    anciensRdv.push(rendezVous);
    localStorage.setItem('rendezvous', JSON.stringify(anciensRdv));

    localStorage.setItem('rdv', JSON.stringify(rendezVous));
    window.location.href = 'confirmation.html';
    });
}
const btnRecap = document.getElementById('btnRecap');
const modalBody = document.getElementById('recap-body');


// Bouton recap
btnRecap?.addEventListener('click', () => {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('emailbooking').value;
    const tel = document.getElementById('tel').value;
    const specialite = document.getElementById('specialite').selectedOptions[0]?.textContent;
    const medecin = document.getElementById('medecin').selectedOptions[0]?.textContent;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;
    const message = document.getElementById('message')?.value || '';

    const recap = { nom, prenom, email, tel, specialite, medecin, date, heure, message };
    localStorage.setItem('rdv', JSON.stringify(recap)); // pour la page confirmation

    // Afficher le recap
    modalBody.innerHTML = `
    <div class="alert alert-info">
        <h5 class="mb-3">Récapitulatif de votre rendez-vous :</h5>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Spécialité :</strong> ${specialite}</p>
        <p><strong>Médecin :</strong> ${medecin}</p>
        <p><strong>Date :</strong> ${date}</p>
        <p><strong>Heure :</strong> ${heure}</p>
        <p><strong>Message :</strong> ${message || 'Aucun message.'}</p>
    </div>
    `;
});



// Bouton confirmFinal
document.getElementById('confirmFinal')?.addEventListener('click', () => {
    // Met à jour les créneaux occupés
const idMedecin = document.getElementById("medecin").value;
const dateChoisie = document.getElementById("date").value;
const heureChoisie = document.getElementById("heure").value;

let rdvOccupees = JSON.parse(localStorage.getItem("rdv_occupees")) || {};

if (!rdvOccupees[idMedecin]) {
    rdvOccupees[idMedecin] = {};
}
if (!rdvOccupees[idMedecin][dateChoisie]) {
    rdvOccupees[idMedecin][dateChoisie] = [];
}
if (!rdvOccupees[idMedecin][dateChoisie].includes(heureChoisie)) {
    rdvOccupees[idMedecin][dateChoisie].push(heureChoisie);
}

localStorage.setItem("rdv_occupees", JSON.stringify(rdvOccupees));




    window.location.href = 'confirmation.html';
});


//Bouton recap
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    if (this.checkValidity()) {
        var recapModal = new bootstrap.Modal(document.getElementById('recap'));
        recapModal.show();
    } else {
        this.reportValidity(); 
    }
});

//Bouton annuler
document.getElementById('annuler').addEventListener('click', function() {
    var recapModal = bootstrap.Modal.getInstance(document.getElementById('recap'));
    recapModal.hide();

    setTimeout(function() {
        var rdvModal = new bootstrap.Modal(document.getElementById('rendez-vous'));
        rdvModal.show();
    }, 400); 
});
});
