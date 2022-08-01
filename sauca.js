/* Objetos */

const productos = [
  {
    id: 1,
    nombre: "Jabón",
    precio: 400,
    category: "jabones",
    img: "../Sauca-DOM/imagenes/jabon-artesanal.jpg",
  },
  {
    id: 2,
    nombre: "Shampoo Graso",
    precio: 700,
    category: "shampoos",
    img: "https://www.saucanatural.com/wp-content/uploads/2020/02/shp-graso-1-e1610746701326-600x481.jpg",
  },
  {
    id: 3,
    nombre: "Shampoo Seco",
    precio: 700,
    category: "shampoos",
    img: "https://www.saucanatural.com/wp-content/uploads/2020/02/SECO-1-e1610746447930.png",
  },
  {
    id: 4,
    nombre: "Unguento Mu",
    precio: 850,
    category: "cosmeticos",
    img: "https://www.saucanatural.com/wp-content/uploads/2020/04/ung%C3%BC-m%C3%BC-1-600x419.jpg",
  },
  {
    id: 5,
    nombre: "Acondicionador",
    precio: 650,
    category: "shampoos",
    img: "https://www.saucanatural.com/wp-content/uploads/2020/04/ACOND-1-e1610748378686-600x560.png",
  },
  {
    id: 6,
    nombre: "Dentífrico",
    precio: 300,
    category: "cosmeticos",
    img: "https://www.saucanatural.com/wp-content/uploads/2020/05/Denti-4-600x494.jpg",
  },
];

/* Evento agregar al carrito y total carrito */

const cardProductos = document.getElementById("card_productos");

productos.forEach((product) => {
  cardProductos.innerHTML += `
<div id="card_productos" id="productos${product.id}">
  <img src="${product.img}" class="card-img-top">
  <div class="card-body">
    <h2 class="card-title">${product.nombre}</h2>
    <p class="card-text">$${product.precio}</p>
    <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
  </div>
</div>`;
});

/*
const botonCarrito = document.getElementById("boton_carrito");
botonCarrito.addEventListener('click', ()=>{
    agregarAlCarrito(productos)
});
*/
function agregarAlCarrito(id) {
let agregados = productos.find((product) => product.id === id);
contadorCarrito.push(agregados)
  alert("Agregaste " + agregados.nombre + " al carrito");
  console.log(contadorCarrito);
}

const botonCompra = document.getElementById("carrito");

botonCompra.addEventListener("click", () => {
  Compra(contadorCarrito);
});

let contadorCarrito = [];

function Compra() {
  let totalCompra = 0;
  if (contadorCarrito.length > 0) {
    for (i = 0; i < contadorCarrito.length; i++) {
      totalCompra += Number(contadorCarrito[i].precio);
    }
    console.log(contadorCarrito);
    alert("Total compra " + "$ " + totalCompra.toFixed(2));
    if (totalCompra > 5000) {
      alert("Tu compra supera los $5000 tenes envio gratis");
    } else {
    }
  } else {
    return alert("No tienes productos en el carrito")
  }
}

/* Borrar carrito */

const botonBorrar = document.getElementById("borrar_carrito");
botonBorrar.addEventListener("click", () => {
  borrarCarrito(contadorCarrito);
});

function borrarCarrito() {
  if (contadorCarrito.length > 0) {
    contadorCarrito.splice(0, contadorCarrito.length);
    console.log(contadorCarrito);
    alert("Eliminaste los productos del carrito");
  } else {
    return alert("No tienes productos en el carrito");
  }
}

/* Eventos Creando Cards*/
