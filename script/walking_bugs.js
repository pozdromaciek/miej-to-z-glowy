document.addEventListener("DOMContentLoaded", () => {
    const bugs = Array.from(document.querySelectorAll(".bug"));

    // Funkcja poruszająca robakiem do losowych pozycji na ekranie
    function moveBug(bug) {
        const maxX = window.innerWidth - 100; // Upewnij się, że robak nie wychodzi poza ekran
        const maxY = window.innerHeight - 100;

        // Generowanie losowych pozycji
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Przesunięcie robaka do nowej pozycji z losowym obrotem
        bug.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    }

    // Funkcja animacji losowego ruchu dla każdego robaka
    function randomWalk() {
        bugs.forEach(bug => {
            moveBug(bug);
        });
        setTimeout(randomWalk, Math.random() * 3000 + 2000); // Losowy czas od 2s do 5s
    }

    // Umieść robaki na prawej stronie ekranu
    bugs.forEach(bug => {
        bug.style.left = `${window.innerWidth}px`; // Początkowa pozycja robaków z prawej
        moveBug(bug); // Rozpocznij ruch
    });

    randomWalk(); // Start animacji
});
