// Función que cambia el color de fondo del encabezado al hacer clic en el botón
function changeColor() {
    var header = document.querySelector('header');
    header.style.backgroundColor = 'pink';
  }
  
  // Galería de imágenes que se desplazan automáticamente
  var slideIndex = 0;
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); }// Cambia la imagen cada 2 segundos}