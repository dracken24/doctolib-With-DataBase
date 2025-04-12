document.addEventListener('DOMContentLoaded', function() {
    // Remplir l'élément appBar avec la barre de navigation
    document.getElementById('appBar').innerHTML = `
        <nav class="navbar bg-dark navbar-dark navbar-expand-md p-3">
            <div class="container col-12">
                <!-- Logo et nom -->
                <div class="d-flex align-items-center">
                    <a href="index.html">
                        <img src="https://img.myloview.fr/images/logo-medecin-medecine-400-70576989.jpg" alt="logo" height="58" class="logo me-3 rounded-circle border">
                    </a>
                    <a class="navbar-brand" href="index.html">Mini Doctolib</a>
                </div>

                <!-- Slogan centré -->
                <div class="mx-auto">
                    <img src="assets/img/slogan.png" height="58px">
                </div>

                <!-- Menu de navigation -->
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Accueil</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="doctors.html">Liste des médecins</a></li>
                                <li><a class="dropdown-item" href="booking.html">Prendre un rendez-vous</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Profil</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#connexion" href="#">Connexion</a></li>
                                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#creation-account" href="#">Creer un compte</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    // Ajouter la classe loaded au body pour activer les transitions
    document.body.classList.add('loaded');
    
    // Ajouter la classe loaded à tous les éléments avec la classe page-transition
    const pageTransitions = document.querySelectorAll('.page-transition');
    pageTransitions.forEach(element => {
        element.classList.add('loaded');
    });
}); 