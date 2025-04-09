// Fonction pour charger le contenu d'un fichier HTML
async function loadHTMLContent(url, targetId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Pour la navbar, on prend le contenu de la nav
        if (targetId === 'navbar-container') {
            const navbar = doc.querySelector('nav');
            document.getElementById(targetId).innerHTML = navbar.outerHTML;
        }
        // Pour le footer, on prend le contenu du footer
        else if (targetId === 'footer-container') {
            const footer = doc.querySelector('.footer-container');
            document.getElementById(targetId).innerHTML = footer.outerHTML;
        }
    } catch (error) {
        console.error('Erreur lors du chargement du contenu:', error);
    }
}

// Charger la navbar et le footer au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadHTMLContent('template.html', 'navbar-container');
    loadHTMLContent('template.html', 'footer-container');
}); 