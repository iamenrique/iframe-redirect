(function (topWindow, iframe) {
    if (iframe) {
        // Se está ejecutando dentro del iframe, recicla el RedirectService del contexto superior.
        iframe.RedirectService = topWindow.RedirectService
    } else if (!topWindow.RedirectService) {
        // Se está ejecutando en el contexto superior pero el RedirectService no se ha inicializado.
        topWindow.RedirectService = {
            navigationTriggered: function () {
                console.log('RedirectService: ¡Navegación detectada!')
            }
        }
    } else {
        // Se está ejecutando en el contexto superior y el RedirectService ya existe. ¿Será esto posible?
    }
})((window.parent !== window ? window.parent : window), (window.parent !== window ? window : null));