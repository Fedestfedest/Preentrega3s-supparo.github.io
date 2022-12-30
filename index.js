
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
const listaProductoOscuro = document.querySelector(".card-productos")

const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}




function validarLogin (clave) {
    if (clave !== true) {
    } else {
    
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

 botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
 }
 
 
 validarLogin(obtenerDelLs("login"))


 
