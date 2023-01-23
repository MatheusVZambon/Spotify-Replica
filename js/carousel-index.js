let slideIndex = 1;
showSlides(slideIndex);

function slideStep(x){
    showSlides(slideIndex += x);
}

function slideChange(x){
    showSlides(slideIndex = x);
}

function showSlides(x){
    let lc;
    let slides = document.getElementsByClassName("main-carousel-slide");
    let dots = document.getElementsByClassName("main-carousel-slide-dot");
    if (x > slides.length)
        {slideIndex = 1}

    if (x < 1)
        {slideIndex = slides.length}

    for (lc = 0; lc < slides.length; lc++){
      slides[lc].style.display = "none";
    }

    for (lc = 0; lc < dots.length; lc++){
      dots[lc].className = dots[lc].className.replace(" main-carousel-slide-dot-act", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " main-carousel-slide-dot-act";
} 