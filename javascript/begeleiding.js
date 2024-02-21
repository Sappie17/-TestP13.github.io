document.addEventListener("DOMContentLoaded", function () {
    // Bij het laden van de pagina, toon de eerste foto
    showBegeleiding(1);

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showBegeleiding(currentGroup === 1 ? 6 : currentGroup - 1);
        } else if (event.key === "ArrowRight") {
            showBegeleiding(currentGroup === 6 ? 1 : currentGroup + 1);
        }
    });
});

let currentGroup = 1;

function showBegeleiding(groep) {
    document.getElementById('begeleiding-container').style.display = 'none';

    if (groep >= 1 && groep <= 6) {
        // Zorg ervoor dat de foto's van de begeleiding per groep juist zijn opgeslagen
        // In de map Begeleiding
        // Met als naam GROEP1-6
        // OPSLAAN ALS JPG
        const imagePath = `../images/Begeleiding/GROEP${groep}.jpg`;
        document.getElementById('begeleiding-img').src = imagePath;

        // Hier kun je de tekst per foto aanpassen
        const tekstPerFoto = [
            "Begeleiding van groep 1: Nel, Maarten, Stijn, Bauke ",
            "Begeleiding van groep 2: Quinten, Kaat, Berre",
            "Begeleiding van groep 3: Robbe, Alexander, Wout, Helena",
            "Begeleiding van groep 4: Warre, Eva, Seppe",
            "Begeleiding van groep 5: Cas, Sven, Stef",
            "Begeleiding van groep 6: Nelle"
        ];

        document.getElementById('begeleiding-tekst').innerText = tekstPerFoto[groep - 1];
        document.getElementById('begeleiding-container').style.display = 'block';

        currentGroup = groep;
    }
}