var slide = 0;
slideshow();
function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide++;
    if (slide > slides.length) { slide = 1 }
    slides[slide - 1].style.display = "block";
    setTimeout(slideshow, 30000);
}