
const botonPerfil = document.querySelector("#botonPerfil")
const botonInicioSesion = document.querySelector("#botonInicioSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
let nameError = document.getElementById ('name-error');
let phoneError = document.getElementById ('phone-error');
let emailError = document.getElementById ('email-error');
let messageError = document.getElementById ('message-error');



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
    e.preventDefault();
    body.classList.toggle("modo-oscuro");
    subirAlLs("modoOscuro", true);
 }




 function cambiarModoOscuro (clave) {
    if (clave == true) {
        body.classList.toggle("modo-oscuro");
    } else {
    
    }
 }

 function validarNombre () {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0){
        nameError.innerHTML = 'Nombre requerido';
        return false;
    } else if (name.length < 3){
        nameError.innerHTML = 'Debe tener al menos 3 digitos'
        return false
    } 
    else  {
        nameError.innerHTML = 'valido';
        return true;
    }}

function validarTelefono() {
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0) {
        phoneError.innerHTML = "Telefono requerido";
        return false ;
    } else if (phone.length < 9) {
        phoneError.innerHTML = "Debe tener al menos 8 digitos";
        return false;
    } else {
        phoneError.innerHTML = "valido";
        return true;
    }
        
    }

    function validarEmail() {
        var email = document.getElementById ('contact-email').value;
        if (email.length == 0) {
            emailError.innerHTML = 'Email Requerido';
            return false;
        } else if (!email.match(/[@]/)) {
            emailError.innerHTML = 'Introduzca un email valido'
            return false
        } else {
            emailError.innerHTML = 'valido'
            return true
        }
    }
    


 
 validarLogin(obtenerDelLs("login"))
 cambiarModoOscuro(obtenerDelLs("modoOscuro"))
 validarNombre()
 validarTelefono()
validarEmail()
