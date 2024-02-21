document.addEventListener("DOMContentLoaded", function () {
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const closeButton = document.getElementById("close-button");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    const lightboxImg = document.getElementById("lightbox-img");

    const imageFolderPath = "../images/Foto's/";
    const imageFiles = [
        //Voeg de bestandsnamen van de foto's toe
        //gemakkelijk om ze genummerd en allemaal als jpg op te slaan
            "01.jpg",
            "02.jpg",
            "03.jpg",
            "04.jpg",
            "05.jpg",
            "06.jpg",
            "07.jpg",
            "08.jpg",
            "09.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg",
            "20.jpg",
            "21.jpg",
            "22.jpg",
            "23.jpg",
            "24.jpg",
            "25.jpg",
            "26.jpg",
            "27.jpg",
            "28.jpg",
            "29.jpg",
            "30.jpg",
            "31.jpg",
            "32.jpg",
            "33.jpg",
            "34.jpg",
            "35.jpg",
            "36.jpg",
            "37.jpg",
            "38.jpg",
            "39.jpg",
            "40.jpg",
            "41.jpg",
            "42.jpg",
            "43.jpg",
            "44.jpg",
            "45.jpg",
            "46.jpg",
            "47.jpg",
            "48.jpg",
            "49.jpg",
            "50.jpg",
            "51.jpg",
            "52.jpg",
            "53.jpg",
            "54.jpg",
            "55.jpg",
            "56.jpg",
            "57.jpg",
            "58.jpg",
            "59.jpg",
            "60.jpg",
            "61.jpg",
            "62.jpg",
            "63.jpg",
            "64.jpg",
            "65.jpg",
            "66.jpg",
            "67.jpg",
            "68.jpg",
            "69.jpg",
            "70.jpg",
            "71.jpg",
            "72.jpg",
            "73.jpg",
            "74.jpg",
            "75.jpg",
            "76.jpg",
            "77.jpg",
            "78.jpg",
            "79.jpg",
            "80.jpg",
            "81.jpg",
            "82.jpg",
            "83.jpg",
            "84.jpg",
            "85.jpg",
            "86.jpg",
            "87.jpg",
            "88.jpg",
            "89.jpg",
            "90.jpg",
    ];

    let currentIndex = 0;

    function updateLightboxImage() {
        lightboxImg.src = imageFolderPath + imageFiles[currentIndex];
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
        updateLightboxImage();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageFiles.length;
        updateLightboxImage();
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showPrevImage();
        } else if (event.key === "ArrowRight") {
            showNextImage();
        } else if (event.key === "Escape") {
            lightboxOverlay.style.display = "none";
        }
    });

    closeButton.addEventListener("click", function () {
        lightboxOverlay.style.display = "none";
    });

    prevArrow.addEventListener("click", showPrevImage);
    nextArrow.addEventListener("click", showNextImage);

    const imageContainer = document.getElementById("image-container");
    imageFiles.forEach(function (imageFile, index) {
        const imageElement = document.createElement("img");
        imageElement.src = imageFolderPath + imageFile;

        const container = document.createElement("div");
        container.className = "image-container";
        container.appendChild(imageElement);

        container.addEventListener("click", function () {
            currentIndex = index;
            updateLightboxImage();
            lightboxOverlay.style.display = "flex";
        });

        imageContainer.appendChild(container);
    });
});