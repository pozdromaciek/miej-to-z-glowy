document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('body'); // Możesz zmienić na inny element, np. ".main-content"

    // Ustaw wysokość padding-top w zależności od wysokości navbaru
    function adjustPadding() {
        content.style.paddingTop = navbar.offsetHeight - 100 + 'px';
    }

    // Wywołaj funkcję na załadowanie strony
    adjustPadding();

    // Nasłuchuj zmiany rozmiaru okna
    window.addEventListener('resize', adjustPadding);
});
