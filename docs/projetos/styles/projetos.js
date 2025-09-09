let slide_index = 0;
exibirSlides();

function exibirSlides() {
  let i;
  let slides = document.getElementsByClassName("mSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slide_index++;
  if (slide_index > slides.length) {slide_index = 1}
  slides[slide_index-1].style.display = "block";
  setTimeout(exibirSlides, 3000);
} 

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 