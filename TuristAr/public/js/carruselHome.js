window.onload = function() {
    // Obtener todos los elementos del carrusel
const carrusel = document.querySelector('.carrusel-home');
const carruselItems = document.querySelectorAll('.carrusel-item');

// Establecer variables y configuración del carrusel
let index = 0;
const intervalTime = 3000; // Cambia esto para ajustar la velocidad del carrusel

// Función para pasar al siguiente elemento del carrusel
function nextSlide() {
    index = (index + 1) % carruselItems.length;
    carrusel.scrollTo({
        left: carruselItems[index].offsetLeft,
        behavior: 'smooth'
    });
}

// Desplazamiento automático del carrusel
setInterval(nextSlide, intervalTime);

}