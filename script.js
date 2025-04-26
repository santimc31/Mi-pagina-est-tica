// Interactividad con el botón
document.getElementById('explore').addEventListener('click', () => {
    alert('¡Estás a punto de explorar lo mejor de Santiago!');
});

// Microinteracción de las secciones
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.03)';
        section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});
