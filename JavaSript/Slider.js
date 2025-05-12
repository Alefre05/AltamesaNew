document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos necesarios
    const productSlider = document.querySelector('.product-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Verificar que existan los elementos necesarios
    if (!productSlider || !prevBtn || !nextBtn || productCards.length === 0) {
        console.error('No se encontraron elementos necesarios para el slider');
        return;
    }
    
    // Configuración del carrusel
    let currentIndex = 0;
    const totalCards = productCards.length;
    
    // Actualizar la visualización de las tarjetas
    function updateDisplay() {
        const isMobile = window.innerWidth <= 768;
        
        productCards.forEach((card, index) => {
            // Resetear estilos
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = '';
            card.style.zIndex = '1';
            card.classList.remove('active');
            
            // Lógica para pantallas de escritorio
            if (!isMobile) {
                // Calcular el índice relativo
                const relativeIndex = (index - currentIndex + totalCards) % totalCards;
                
                // Ajustar posición y tamaño de las tarjetas
                if (relativeIndex === 0) {
                    // Tarjeta central
                    card.style.transform = 'translateX(0) scale(1)';
                    card.style.zIndex = '2';
                    card.classList.add('active');
                } else if (relativeIndex === totalCards - 1) {
                    // Tarjeta izquierda
                    card.style.transform = 'translateX(-100%) scale(0.9)';
                } else if (relativeIndex === 1) {
                    // Tarjeta derecha
                    card.style.transform = 'translateX(100%) scale(0.9)';
                } else {
                    // Otras tarjetas ocultas
                    card.style.opacity = '0';
                }
            }
        });
    }
    
    // Inicializar el carrusel
    updateDisplay();
    
    // Actualizar el carrusel cuando se redimensiona la ventana
    window.addEventListener('resize', updateDisplay);
    
    // Evento para el botón siguiente
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateDisplay();
    });
    
    // Evento para el botón anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateDisplay();
    });
    
    // Inicializar también el botón de menú para móviles
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
        });
    }
});



