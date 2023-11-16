const products = [
	{
		id: "1",
		nombre: "Portaretrato Love.",
		marca: "corazones",
		precio: 35000,
        imagen: "./image/portaretratolove.jpg",
		descripcion: "Un portaretratos personalizado es un regalo pensado con amor.",
	},
	{
		id: "2",
		nombre: "Portaretrato 3 en 1.",
		marca: "familia",
		precio: 35000,
        imagen: "./image/portaretratofamilia.jpg",
		descripcion: "Sorprende a tus seres queridos con un recuerdo.",
	},
	{
		id: "3",
		nombre: "Retablos.",
		marca: "corazón",
		precio: 50000,
        imagen: "./image/retablo.jpg",
		descripcion: "Regalos que Emocionan: Un retablo personalizado.",
	},
	{
		id: "4",
		nombre: "Retablo Corazón.",
		marca: "Collage",
		precio: 55000,
        imagen: "./image/retablo2.jpg",
		descripcion: "Nuestros retablos dan un toque unico a cualquier espacio.",
	},
	{
		id: "5",
		nombre: "Mugs Personalizado.",
		marca: "pesonalizado",
		precio: 25000,
        imagen: "./image/mugspersonalizado.jpg",
		descripcion: "Es como tener un pedacito de magia en tus manos",
	},
	{
		id: "6",
		nombre: "Mugs Magico.",
		marca: "Taza magica",
		precio: 28000,
        imagen: "./image/mugsmagico.jpg",
		descripcion: "Nuestras tazas mágicas están elaboradas con calidad.",
	},
	
];



const carrito = [];

// Función para mostrar productos en el DOM
function renderProducts(products) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>Precio: $${product.precio}</p>
            <img src="${product.imagen}" alt="${product.nombre}">
            <p>${product.descripcion}</p>
            <button id="${product.id}" class="btn-agregar">agregar producto</button>
        `;
        productContainer.appendChild(productDiv);
    });
    const btnAgregar = document.querySelectorAll(".btn-agregar");
    btnAgregar.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            addToCart(e.target.id);
        });
    });
}

function addToCart (productId){
    const product = products.find((prod) => prod.id === productId);
    if (product){
        const existingProduct = carrito.find((prod) => prod.id === productId);

        if (existingProduct){
            existingProduct.cantidad++;
            console.log(carrito)
        } else {
            const productCopy = {... product, cantidad: 1};
            carrito.push(productCopy);
            console.log(carrito)
        }
        updateCartIcon(carrito.length);
    }
}


// Función para actualizar el ícono del carrito
function updateCartIcon(numeroCarrito) {
    
    const numeroCarritoElement = document.getElementById("numero-carrito");

    if (numeroCarrito > 0) {
       
        numeroCarritoElement.textContent = numeroCarrito;
    } else {
        
        numeroCarritoElement.textContent = "0";
    }
}


// Cargar productos desde una API externa usando Fetch
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Aquí puedes trabajar con los datos obtenidos de la API
        console.log(data);
    })
    .catch((error) => {
        console.error("Error al cargar datos desde la API:", error);
    });



// Evento para agregar un producto al hacer clic en el botón "Agregar al carrito"
document.addEventListener("click", function(event) {
    if (event.target && event.target.className === "add-to-cart-button") {
        const productId = event.target.getAttribute("data-product-id");
        const product = products.find((p) => p.id === productId);
        if (product) {
            addToCart(product);
        }
    }
});

// Llama a la función para mostrar los productos al cargar la página
renderProducts(products);

// Definir la variable numerocarrito con un valor 
const numerocarrito = 5;

// Actualiza el ícono del carrito al cargar la página
updateCartIcon(carrito.length);


