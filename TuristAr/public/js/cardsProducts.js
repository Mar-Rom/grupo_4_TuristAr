window.onload = function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
    
        let currentIndex = 0;
        const slides = container.querySelectorAll('a');
        const totalSlides = slides.length;
    
        // Función para cambiar el slide hacia la izquierda
        const slideLeft = () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        };
    
        // Función para cambiar el slide hacia la derecha
        const slideRight = () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        };
    
        // Event listeners para los botones de control
        prevBtn.addEventListener('click', slideLeft);
        nextBtn.addEventListener('click', slideRight);
    
        // Opción de desplazamiento automático (deshabilitada por defecto, puedes habilitarla si deseas)
        
        setInterval(() => {
            slideRight();
        }, 5000); // Cambiar cada 5 segundos (5000ms)

        // Event listeners para deslizamiento táctil en dispositivos móviles
    container.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    container.addEventListener('touchmove', e => {
        if (!startX || !startY) return;

        const diffX = startX - e.touches[0].clientX;
        const diffY = startY - e.touches[0].clientY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > sensitivity) {
                slideRight();
            } else if (diffX < -sensitivity) {
                slideLeft();
            }
        }

        startX = 0;
        startY = 0;
    });
       
    });
    
    
}
