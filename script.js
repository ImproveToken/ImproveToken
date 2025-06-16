document.addEventListener('DOMContentLoaded', function () {
    const buttonContainer = document.querySelector('.button-container');

    buttonContainer.addEventListener('wheel', function (event) {
        event.stopPropagation();
    });
});


function changePanorama(imageSrc) {
    const sky = document.getElementById("panorama");
    if (sky) {
        sky.setAttribute("src", imageSrc);
    }
}