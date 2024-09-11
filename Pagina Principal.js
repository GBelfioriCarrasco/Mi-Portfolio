// Obtén todos los enlaces del menú
const links = document.querySelectorAll('.Navbar a');

// Agrega un event listener a cada enlace
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Desplázate suavemente hasta la sección
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});