
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")



const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

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

 
 botonModos.onclick = (e) => {
    body.classList.toggle("modo-oscuro")
    subirAlLs("modoOscuro", true)
 }

 

 function cambiarModoOscuro (clave) {
    if (clave == true) {
        body.classList.toggle("modo-oscuro")
    } else {
    
    }
 }

 function cambiarModoClaro (clave) {
    if (clave == true) {
        botonModos.onclick = (e) => {
        body.classList.toggle("modo-claro")
        
        
        }
    }
}

 function cambiarModoClaroLS (clave) {
    if(clave == true) {
        botonModos.onclick = (e) => {
         localStorage.removeItem("modoOscuro")  
        }
    } else {
        
    }
 }


 
 validarLogin(obtenerDelLs("login"))
 cambiarModoOscuro(obtenerDelLs("modoOscuro"))
 cambiarModoClaro(obtenerDelLs("modoOscuro"))
 cambiarModoClaroLS (obtenerDelLs("modoOscuro"))


 
