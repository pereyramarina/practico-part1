document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón de alternancia del menú (hamburguesa)
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Selecciona el contenedor del encabezado
    const header = document.querySelector('.header');

    // Añade un evento de clic al botón de alternancia del menú
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'menu-active' en el contenedor del encabezado
        header.classList.toggle('menu-active');
    });
});