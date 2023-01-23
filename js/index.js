
import productos from './listaProductos.js'

const infoDelLS = JSON.parse(localStorage.getItem("productosEnOferta"))
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
const cardProductos = document.querySelector(".card-productos")

let carrito = []
const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []



const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}




function validarLogin (logueado) {
    if (logueado){
        botonPerfil.style.display = "flex"
        botonInicioSesion.style.display = "none"
        botonCerrarSesion.style.display = "flex"
    } else {
        botonInicioSesion.style.display = "flex"
        botonPerfil.style.display = "none"
        botonCerrarSesion.style.display = "none"
    }
}




 botonCerrarSesion.onclick = () => {
    localStorage.removeItem ("login")
    validarLogin (obtenerDelLs("login"))
    botonCerrarSesion.style.display = "none"
    botonPerfil.style.display = "none"
    botonInicioSesion.style.display = "flex"
 }

 
 botonModos.onclick = (e) => {
    body.classList.toggle("modo-oscuro")
    subirAlLs("modoOscuro", body.classList.contains("modo-oscuro"))
 }

 

 function cambiarModoOscuro (clave) {
    if (clave && !body.classList.contains("modo-oscuro")) body.classList.add("modo-oscuro")
    else body.classList.remove("modo-oscuro")
 }

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
        productosOferta.appendChild(divProducto);
       
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




 obtenerDelLs("productos")
 validarLogin(obtenerDelLs("login"))
 cambiarModoOscuro(obtenerDelLs("modoOscuro"))
 agregarProductos(infoDelLS)
 aniadirAlCarrito(productos)



 
