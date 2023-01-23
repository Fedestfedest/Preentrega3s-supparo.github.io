import productos from './listaProductos.js'


let carrito = []

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))

carrito = productosElegidos || []

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}
const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}
const listaProductoOscuro = document.querySelector(".card-productos")
const botonOrdenPorNombre = document.querySelector("#opcionAZ")


function agregarProductos(array) {
    array.forEach((producto) => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("card", "col-xl-3", "col-md-6", "col-sm-12");
        divProducto.innerHTML = `
                            <div class= "card-productos">
                                    <img id = "card-img"src="${producto.img}"> 
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-precio"> ${producto.precio} <p>
                                    <p class="card-text"> ${producto.categoria} </p>
                                    <button id="boton-${producto.id}" class="boton-card">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>`;
        listaProductos.appendChild(divProducto);
    })};


function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((productos) => {
                return productos.id === Number(id)
            })
          
          carrito.push(filtrarProducto)
          localStorage.setItem("carrito", JSON.stringify(carrito))
          console.log(carrito)
    } 

})
}

botonModos.onclick = (e) => {
    body.classList.toggle("modo-oscuro")
    subirAlLs("modoOscuro", body.classList.contains("modo-oscuro"))
 }

 

 function cambiarModoOscuro (clave) {
    if (clave && !body.classList.contains("modo-oscuro")) body.classList.add("modo-oscuro")
    else body.classList.remove("modo-oscuro")
 }


  botonOrdenPorNombre.onclick = (e) => {
        [...productos].sort(( a, b ) => {
            if(a < b) {
                return -1
            } else if (a > b) {
                return 1
            } else {
                return 0 
            }
        })}
     






    agregarProductos(productos)
    aniadirAlCarrito(productos)
    obtenerDelLs("productos")
    cambiarModoOscuro(obtenerDelLs("modoOscuro"))



    



