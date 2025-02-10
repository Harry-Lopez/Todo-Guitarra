//Definicion de divisiones
const teorias = [
    {
        title: "Notas de Guitarra",
        image: "notas.jpg"
    },
    {
        title: "Intervalos de Guitarra",
        image: "intervalos.jpg"
    },
    {
        title: "Alteraciones de Guitarra",
        image: "alteraciones.jpg"
    },
    {
        title: "Elementos teoricos de Guitarra",
        image: "elementos.jpg"
    },
    {
        title: "Notacion en Guitarra",
        image: "notacion.jpg"
    },
    {
        title: "Teoria_Tablatura",
        image: "tablatura.jpg"
    }
];

// Genera dinámicamente las tarjetas de productos
function generateCards() {
    const teoriasContainer = document.querySelector(".teory"); // Contenedor de productos

    teorias.forEach(teoria => {
        const cardHTML = `
            <div class="product">
                <h3 class="product__title">${teoria.title}</h3>
                <img src="${teoria.image}" alt="${teoria.title}" class="product__image">
            </div>
        `;
        teoriasContainer.innerHTML += cardHTML; // Agrega la tarjeta al contenedor
    });
}

generateCards();