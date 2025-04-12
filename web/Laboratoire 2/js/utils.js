document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appBar').innerHTML = `
        <nav class="navbar bg-dark navbar-dark navbar-expand-md p-3">
            <div class="container col-12">
                <a href="index.html">
                    <img src="https://img.myloview.fr/images/logo-medecin-medecine-400-70576989.jpg" alt="logo" height="58" class="logo me-3 rounded-circle border">
                </a>
                <a class="navbar-brand" href="index.html">Mini Doctolib</a>

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
                                <li><a class="dropdown-item"  data-bs-toggle="modal" data-bs-target="#connexion" href="#">Connexion</a></li>
                                <li><a class="dropdown-item" href="#">Creer un compte</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footBar').innerHTML = `
        <div class="footer-container bg-dark text-white">
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
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Connexion</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Creer un compte</a></li>
                        </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2025 Mini Doctolib, Inc. All rights reserved.</p>
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

// Fonction pour gérer les transitions de page
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter la classe 'loaded' au body une fois que tout est chargé
    document.body.classList.add('loaded');
    
    // Ajouter la classe 'loaded' à tous les éléments avec la classe 'page-transition'
    const pageTransitions = document.querySelectorAll('.page-transition');
    pageTransitions.forEach(element => {
        element.classList.add('loaded');
    });
    
    // Précharger les pages pour éviter les flashs blancs
    preloadPages();
});

// Fonction pour précharger les pages
function preloadPages() {
    // Liste des pages à précharger
    const pages = [
        'index.html',
        'doctors.html',
        'booking.html',
        'contact.html',
        'confirmation.html'
    ];
    
    // Précharger chaque page
    pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
}

// clics sur les liens pour des transitions
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href && e.target.href.startsWith(window.location.origin)) {
        // Ignorer les liens dans les menus déroulants
        if (e.target.closest('.dropdown-menu') || e.target.classList.contains('dropdown-toggle')) {
            return; // Ne pas appliquer la transition pour les liens de menu déroulant
        }
        
        // Ignorer les data-bs-toggle
        if (e.target.hasAttribute('data-bs-toggle')) {
            return;
        }
        
        e.preventDefault();
        
        // Ajouter une classe pour indiquer que la page est en cours de transition
        document.body.classList.remove('loaded');
        
        // Attendre un court instant pour que l'animation de sortie se termine
        setTimeout(() => {
            // Rediriger vers la nouvelle page
            window.location.href = e.target.href;
        }, 300);
    }
});
