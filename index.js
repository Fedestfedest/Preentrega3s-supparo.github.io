
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")

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
    formLogin.reset()
    botonCerrarSesion.style.display = "none"
    botonPerfil.style.display = "none"
    botonInicioSesion.style.display = "flex"
 }

 
 
 validarLogin(obtenerDelLs("login"))


 
