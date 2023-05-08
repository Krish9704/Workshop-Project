
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("c");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 2500);
}

function toggleDropdown() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("navbar-center").classList.toggle("dropup");
    document.getElementById("navbar-center").classList.toggle("dropdown");
}
