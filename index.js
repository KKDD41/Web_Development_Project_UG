let slideIndex = 1;
showSlides(slideIndex);

var mq = window.matchMedia("only screen and (max-width: 600px)")
mq.addEventListener("change", function () {
        showSlides(slideIndex);
    }
)

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
  if (window.matchMedia("only screen and (max-width: 600px)").matches) {
      console.log("Index: ->" + slideIndex.toString() + " length: -> " + slides.length)
      if (slideIndex == 6 && n > 1) {
        slideIndex = 1
      } else if (slideIndex == 6 && n < 1) {
        slideIndex = 5
      }
      slides[slideIndex - 1].style.display = "block"
  } else {
      if (slideIndex < 6) {
        slides[slideIndex-1].style.display = "inline-block";
        slides[slideIndex].style.display = "inline-block";
        partialSlides[slideIndex].style.display = "inline-block";
      } else {
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

var acc = document.getElementsByClassName("service-option");
console.log(acc.length)
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(panel.innerHTML)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}