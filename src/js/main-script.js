(function () {
    let iframeEl = document.getElementById('wt-spa-iframe');
    let anchorEls = document.querySelectorAll('.wt-navbar [data-redirect]');
    anchorEls.forEach(a => {
        a.addEventListener('click', function (ev) {
            ev.preventDefault();
            iframeEl.src = this.dataset.redirect;
            // Lamentablemente NO puedes invocar redirectDetectionCallback en este momento.
        })
    });
})();