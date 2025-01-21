// ========================
// Variables y constantes
// ========================
const products = [
    {
        title: "Acordes/Chords",
        description: "Todas las formas de poner un acorde a lo largo del diapason de la guitarra.",
        image: "img/apartado 1.jpg"
    },
    {
        title: "Escalas/Scales",
        description: "Lo que se nos dificulta a muchos musicos...las formas de tocar una escala a lo largo del diapason.",
        image: "img/apartado 2.png"
    },
    {
        title: "Teoria Musical",
        description: "Todas las tecnicas que se pueden hacer en la guitarra electrica o acustica, asi como los principios y fundamentos de este instrumento.",
        image: "img/apartado 3.jpg"
    }
];

const carouselImages = [
    "img/fondo33.JPG",
    "img/fondo34.JPG",
    "img/fondo35.JPG"

];

let currentIndex = 0; // Índice actual para el carrusel

// ========================
// Funciones
// ========================

// Genera dinámicamente las tarjetas de productos
function generateCards() {
    const productsContainer = document.querySelector(".products"); // Contenedor de productos
    productsContainer.innerHTML = ""; // Limpia el contenedor antes de agregar tarjetas

    products.forEach(product => {
        const cardHTML = `
            <div class="product">
                <h3 class="product__title">${product.title}</h3>
                <p class="product__description">${product.description}</p>
                <img src="${product.image}" alt="${product.title}" class="product__image">
                ${product.title === "Acordes/Chords" ? '<button class="about-button acordes-button">Acordes</button>' : ''}
                ${product.title === "Escalas/Scales" ? '<button class="about-button escalas-button">Escalas</button>' : ''}
                ${product.title === "Teoria Musical" ? '<button class="about-button teoria-button">Explorar</button>' : ''}
            </div>
        `;
        productsContainer.innerHTML += cardHTML; // Agrega la tarjeta al contenedor
    });
}

// Configura el carrusel de imágenes en la sección "Nosotros"
function setupCarousel() {
    const nosotrosSection = document.querySelector(".section--nosotros"); // Sección del carrusel

    setInterval(() => {
        // Cambia la imagen de fondo cada 4 segundos
        nosotrosSection.style.backgroundImage = `url(${carouselImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % carouselImages.length; // Actualiza el índice
    }, 4000);
}

// Configura el menú hamburguesa para dispositivos móviles
function setupHamburgerMenu() {
    const toggleButton = document.querySelector(".nav__toggle"); // Botón hamburguesa
    const navMenu = document.querySelector(".nav__menu"); // Menú de navegación
    
    const escalasButtons = document.querySelectorAll('.escalas-button');
    escalasButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('aboutEscalas.html', '_blank');
        });
    });

    const teoriaButtons = document.querySelectorAll('.teoria-button');
    teoriaButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('aboutTeoria.html', '_blank');
        });
    });

    const aboutButtons = document.querySelectorAll('.about-button');
aboutButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('about.html', '_blank');
    });
});


    // Función para alternar el menú
    toggleButton.addEventListener("click", () => {
        // Verifica el ancho de la pantalla antes de aplicar la clase
        if (window.innerWidth <= 767) {
            navMenu.classList.toggle("nav__menu--open");
            // Cambia la posición del botón hamburguesa según el estado del menú
            toggleButton.style.position = navMenu.classList.contains("nav__menu--open") ? "fixed" : "absolute";
        }
    });

    // Función para eliminar la clase si el ancho de la pantalla supera 767px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            navMenu.classList.remove("nav__menu--open");
            toggleButton.style.position = "absolute"; // Asegura que el botón vuelva a su posición predeterminada
        }
    });
}

// ========================
// Inicialización al cargar la página
// ========================
document.addEventListener("DOMContentLoaded", () => {
    generateCards();      // Generar las tarjetas de productos
    setupCarousel();      // Configurar el carrusel
    setupHamburgerMenu(); // Configurar el menú hamburguesa
});
