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
  let partialSlides = document.getElementsByClassName("myPartialSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < partialSlides.length; i++) {
    partialSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex < 6) {
    slides[slideIndex-1].style.display = "inline-block";
    slides[slideIndex].style.display = "inline-block";
    partialSlides[slideIndex].style.display = "inline-block";
  } else {
    slides[0].style.display = "inline-block";
    slides[1].style.display = "inline-block";
    partialSlides[1].style.display = "inline-block";
  }
  dots[slideIndex-1].className += " active";
}

function showContacts() {
    if (document.getElementById("contacts-section").style.display == "none") {
        document.getElementById("contacts-section").style.display = "block";
    } else {
        document.getElementById("contacts-section").style.display = "none";
    }
}

function showHome() {
    document.getElementById("our-services").style.display = "none"
    document.getElementById("our-projects").style.display = "block"
}

function showServices() {
    document.getElementById("our-projects").style.display = "none"
    document.getElementById("our-services").style.display = "block"
}