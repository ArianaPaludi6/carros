// PRODUCTOS
const productos = [
  {
    nombre: "dona oreo",
    precio: 500,
    img: "/img/oreo.jpg",
    description: "dona con galletitas oreo trituradas,masa sabor de vainilla",
    id: 1,
  },

  {
    nombre: "dona rellena",
    precio: 400,
    img: "./img/rellena.png",
    description: "dona rellena con dulce de leche,masa sabor vainilla",
    id: 2,
  },

  {
    nombre: "dona dulce",
    precio: 380,
    img: "./img/marron.png",
    description:
      "dona con granas de colores y baño de chocolate,masa sabor vainilla",
    id: 3,
  },

  {
    nombre: "dona frutilla",
    precio: 450,
    img: "./img/rosita.jpg",
    description:
      "dona con baño de frutilla y granas de colores,masa sabor vainilla",
    id: 4,
  },

  {
    nombre: "dona combinado",
    precio: 300,
    img: "./img/coloridas.png",
    description: "dona con diseño combinado , masa sabor vainillas",
    id: 5,
  },
  {
    nombre: "dona blanca",
    precio: 290,
    img: "./img/dona6.jpg",
    description: "dona blanca clasica, relleno dulce de leche",
    id: 6,
  },
];

//CARRITO DE COMPRAS
const carrito = [];

let carros = document.getElementById("misproductos");

const Renderizar = () => {
  for (const producto of productos) {
    carros.innerHTML += `<div class="card" style="width: 18rem;">
    <img src=${producto.img} class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.description}</p>
    <div class="detail-price">
    <h5 class="card-text">$ ${producto.precio}</h5>
    <button id='btn${producto.id}'> COMPRAR </button>
    </div>
    </div>
    </div>`;
  }

  productos.forEach((producto) => {
    document
      .getElementById(`btn${producto.id}`)
      .addEventListener("click", function () {
        agregarAlCarro(producto);
      });
  });

  function agregarAlCarro(producto) {
    carrito.push(producto);
    console.log(carrito);
    alert("Producto " + producto.nombre + " agregado al carro con exito!");
    document.getElementById("tablabody").innerHTML += `
  <tr class="tr"> 
  <td>${producto.nombre}</td>
  <td>$${producto.precio}</td>
  <td>${producto.id}</td>
  
  </tr>
  
  `;

    let totalDeCarro = carrito.reduce(
      (acumulador, prod) => acumulador + prod.precio,
      0
    );
    document.getElementById(
      "total"
    ).innerHTML = ` <div class="tocart"><h4>Total: $ ${totalDeCarro}</h4> <button>Pagar</button> </div> `;
  }
};

Renderizar();



localStorage.setItem("carrito",JSON.stringify(carrito));

let almacenar = localStorage.getItem ("carrito");


