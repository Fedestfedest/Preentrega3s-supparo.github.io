let usuario1= {
    user: "Federico@gmail.com",
    password: "Federico123"
}


const containerLogin = document.querySelector(".containerLogin")
const loginIncorrecto = document.querySelector(".loginIncorrecto")
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")
const listaProductos = document.querySelector("#listaProductos")
const loginTrue = JSON.parse(localStorage.getItem("login"))
const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#inputUser")
const inputPass = document.querySelector("#inputPass")
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")


const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}


if (formLogin) {formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if (inputUser.value === usuario1.user && inputPass.value === usuario1.password) {
        subirAlLs("login", true)
        containerLogin.style.display = "none",
botonPerfil.style.display = "flex",
botonInicioSesion.style.display = "none",
botonCerrarSesion.style.display = "flex"
} else {
loginIncorrecto.style.display = "flex"
}}


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
    formLogin.reset()
    botonCerrarSesion.style.display = "none"
    botonPerfil.style.display = "none"
    botonInicioSesion.style.display = "flex"
    containerLogin.style.display = "block"

 }

 botonModos.onclick = (e) => {
    e.preventDefault()
    body.classList.toggle("modo-oscuro")
    subirAlLs("modoOscuro", true)
 }


 function mantenerModoOscuro (clave) {
    if (clave == true) {
        body.classList.toggle("modo-oscuro")
    } else {
    
    }
 }





 validarLogin(obtenerDelLs("login"))
 mantenerModoOscuro(obtenerDelLs("modoOscuro"))