const productos = [{
    id: 1,
    img: "../img/Consola.jpeg",
    nombre: "zonsola Pro Max",
    precio: "USD 60",
    categoria: "Gaming, Informatica",
    oferta: true,
},
{
    id: 2,
    img: "../img/Consola-de-videojuegos-Retro-de-4-3-pulgadas-consola-de-videojuegos-port-til-con-Joystick-Dual.jpg_Q90.jpg_.webp",
    nombre: "sontrol para celulares",
    precio: "USD 15",
    categoria: "Gaming, Informatica",
    oferta: true
},
{
    id: 3,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "aontrol inalambrico",
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
    oferta: false
},
{
    id: 5,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: false
},
{
    id: 6,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: false
},
{
    id: 7,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: false
},
{
    id: 8,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: false
},

]





const productosEnOferta = [{
    id: 1,
    img: "../img/Consola.jpeg",
    nombre: "zonsola Pro Max",
    precio: "USD 60",
    categoria: "Gaming, Informatica",
    oferta: true,
},
{
    id: 2,
    img: "../img/Consola-de-videojuegos-Retro-de-4-3-pulgadas-consola-de-videojuegos-port-til-con-Joystick-Dual.jpg_Q90.jpg_.webp",
    nombre: "sontrol para celulares",
    precio: "USD 15",
    categoria: "Gaming, Informatica",
    oferta: true
},
{
    id: 3,
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "aontrol inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
    oferta: true
},
]

export default productos;


const subirAlLs = (clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse (localStorage.getItem(clave))
}

subirAlLs("productos", productos)
subirAlLs("productosEnOferta", productosEnOferta)