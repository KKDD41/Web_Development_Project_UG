let slideIndex = 1;
showSlides(slideIndex);
var mq = window.matchMedia("only screen and (max-width: 600px)")

// Function, that changes slideshow appearance based on medea query
mq.addEventListener("change", function () { showSlides(slideIndex); })

// Next / Previous Buttons controls
function plusSlides(n) { showSlides(slideIndex += n); }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let partialSlides = document.getElementsByClassName("myPartialSlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hiding all full and partial slides
  for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  for (i = 0; i < partialSlides.length; i++) { partialSlides[i].style.display = "none"; }

  // Showing slides based on current index and medea query
  if (window.matchMedia("only screen and (max-width: 600px)").matches) {
      if (slideIndex == 6 && n > 1) { slideIndex = 1 }
      else if (slideIndex == 6 && n < 1) { slideIndex = 5 }
      slides[slideIndex - 1].style.display = "block"
  } else {
      if (slideIndex < 6) {
        slides[slideIndex-1].style.display = "inline-block";
        slides[slideIndex].style.display = "inline-block";
        partialSlides[slideIndex].style.display = "inline-block";
      }
      else {
        slides[0].style.display = "inline-block";
        slides[1].style.display = "inline-block";
        partialSlides[1].style.display = "inline-block";
      }
  }
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

// Array of accordion options
var acc = document.getElementsByClassName("service-option");
var i;

// Function responsible for accordion content showing & hiding
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(panel.innerHTML)
    if (panel.style.maxHeight) { panel.style.maxHeight = null; }
    else { panel.style.maxHeight = panel.scrollHeight + "px"; }
  });
}
