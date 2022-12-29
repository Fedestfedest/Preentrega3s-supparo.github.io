
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






 function agregarProductos (array) {
    const arrayReduce = array.reduce( (acc,elemento) => {
        return acc + `
        <div>
        <img src= "${elemento.img}" alt="Producto1"> 
        <t2> ${elemento.nombre} </t2>
        <p2>${elemento.categoria}</p2>
        </div>`
        
  },"")
  listaProductos.innerHTML = arrayReduce
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

 
