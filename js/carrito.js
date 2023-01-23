
const infoDelLS = JSON.parse(localStorage.getItem("carrito"))
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#contenedorBotonCerrarSesion")
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
const carritoContenedor = document.querySelector("#carritoContenedor")


const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}

function validarLogin (clave) {
    if (clave) {
        botonPerfil.style.display = "flex"
        botonInicioSesion.style.display = "none"
        botonCerrarSesion.style.display = "flex"
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



 function productosAgregados (array) {
    array.forEach((producto) => {
        const divProductosAgregados = document.createElement("div");
        divProductosAgregados.classList.add("card", "col-xl-3", "col-md-6", "col-sm-12");
        divProductosAgregados.innerHTML = `
                            <div class= "card-productos">
                                    <img id = "card-img"src="${producto.img}"> 
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-precio"> ${producto.precio} <p>
                                    <p class="card-text"> ${producto.categoria} </p>
                                    <button id="boton-${producto.id}" class="boton-card">
                                        Eliminar del Carrito
                                    </button>
                                </div>
                            </div>`;
        carritoContenedor.appendChild(divProductosAgregados);
    })}




    function eliminarDelCarrito (array) {
        const botonEliminar = document.querySelectorAll(".boton-card")
        botonEliminar.forEach( boton => {
            boton.onclick = () => {
                const id = boton.id.slice(6)
                const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id) 
            })
        
            localStorage.setItem("carrito", JSON.stringify(infoDelLS))
           
            
        
        }

    })
}

    botonBorrarCarrito.onclick = () => {
        localStorage.removeItem("carrito")
        carritoContenedor.style.display = "none"

   

    }


     
    validarLogin(obtenerDelLs("login"))
    productosAgregados(infoDelLS)
    eliminarDelCarrito(infoDelLS)
    cambiarModoOscuro(obtenerDelLs("modoOscuro"))
