<<<<<<< HEAD
// Función para manejar el menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Función para alternar la visibilidad del menú
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        
        // Cambiar el ícono según el estado del menú
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Cerrar el menú al hacer clic en cualquier enlace
    const navLinksElements = navLinks.querySelectorAll('a');
    navLinksElements.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
=======
// Script para el menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Verificar que los elementos existan
    if (!menuToggle || !navLinks) {
        console.error('Error: Elementos del menú no encontrados');
        return;
    }
    
    // Función para alternar la visibilidad del menú
    menuToggle.addEventListener('click', function(e) {
        // Prevenir comportamiento por defecto
        e.preventDefault();
        e.stopPropagation();
        
        // Alternar la clase active para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
        
        // Alternar la clase open para la animación del botón
        menuToggle.classList.toggle('open');
        
        // Cambiar el ícono según el estado del menú
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        
        console.log('Menu toggle clicked:', navLinks.classList.contains('active'));
    });
    
    // Cerrar el menú al hacer clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Debug para verificar que el script está cargado
    console.log('Desplegable.js loaded successfully');
>>>>>>> 47eb2c331d76493b5333a3a521fb879a7549cbbe
});
