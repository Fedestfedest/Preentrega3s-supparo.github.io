const productos = [{
    id: 1,
    img: "../img/Consola.jpeg",
    nombre: "Consola Pro Max",
    precio: "USD 60",
    categoria: "Gaming, Informatica",
    oferta: true,
},
{
    id: 2,
    img: "../img/Consola-de-videojuegos-Retro-de-4-3-pulgadas-consola-de-videojuegos-port-til-con-Joystick-Dual.jpg_Q90.jpg_.webp",
    nombre: "Control para celulares",
    precio: "USD 15",
    categoria: "Gaming, Informatica",
    oferta: true
},
{
    id: 3,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: true
},
{
    id: 4,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    id: 5,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    id: 6,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    id: 7,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    id: 8,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},

]


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
    e.preventDefault()
    body.classList.toggle("modo-oscuro")
    listaProductoOscuro.classList.toggle(".card-productosOscuro")
    subirAlLs("modoOscuro", true)
 }


 function mantenerModoOscuro (clave) {
    if (clave == true) {
        body.classList.toggle("modo-oscuro")
        listaProductoOscuro.classList.toggle(".card-productosOscuro")
    } else {
    
    }
 }




    agregarProductos(productos)
    aniadirAlCarrito(productos)
    mantenerModoOscuro(obtenerDelLs("modoOscuro"))



    


