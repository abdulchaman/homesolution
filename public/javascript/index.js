/* Open */
function openNav() {
    document.getElementById("myMenu").style.width= "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myMenu").style.width = "0%";
  }

  window.onscroll = function(){myFunction()};
  var navbar = document.getElementById("myNav");
  var sticky = navbar.offsetTop;

  function myFunction(){
    if(window.pageYOffset > sticky){
      navbar.classList.add("sticky")
    
    }else if(window.pageYOffset <= sticky){
      navbar.classList.remove("sticky");
    }
  }

  // slides
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n){
    showSlides(slideIndex +=n);
  }
  function showSlides(n){
var i;
var slides = document.getElementsByClassName("testimonial-content-box");
if(n>slides.length){
  slideIndex=1;
}
if(n<1){
  slideIndex=slides.length;
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display="block";
  }

  // counter
