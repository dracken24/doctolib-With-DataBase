/*******************************************************************************/
/***                                   NADIA                                 ***/
/*******************************************************************************/

/*******************************************************************************/
/***      Function pour gerer la transition fluid entre toutes les pages     ***/
/*******************************************************************************/

document.addEventListener('DOMContentLoaded', function()
{
    // Ajouter la classe 'loaded' au body une fois que tout est charge
    document.body.classList.add('loaded');
    
    // Ajouter la classe 'loaded' à tous les elements avec la classe 'page-transition'
    const pageTransitions = document.querySelectorAll('.page-transition');

    pageTransitions.forEach(element =>
    {
        element.classList.add('loaded');
    });
});

// clics sur les liens pour des transitions
document.addEventListener('click', function(e) 
{
    if (e.target.tagName === 'A' && e.target.href && e.target.href.startsWith(window.location.origin))
    {
        // Ignorer uniquement les liens de toggle des dropdowns
        if (e.target.classList.contains('dropdown-toggle')
            || e.target.hasAttribute('data-bs-toggle'))
        {
            return;
        }
        
        e.preventDefault();
        
        // Ajouter une classe pour indiquer que la page est en cours de transition
        document.body.classList.remove('loaded');
        
        // Attendre un court instant pour que l'animation de sortie se termine
        setTimeout(() =>
        {
            // Rediriger vers la nouvelle page
            window.location.href = e.target.href;
        }, 600);
    }
});

/*******************************************************************************/
/***                                  NATACHA                                ***/
/*******************************************************************************/



/*******************************************************************************/
/***                               JEAN-FRANCOIS                             ***/
/*******************************************************************************/


