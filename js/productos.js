const productos = [{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},
{
    img: "../img/Joystick_inalambrico_Generico_para_Xbox_360_y_PC_Blanco_tab_1.png",
    nombre: "Control inalambrico",
    precio: "USD 30",
    categoria: "Gaming, Informatica",
},


























]



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
                                </div>
                            </div>`;
        listaProductos.appendChild(divProducto);
    })};



    agregarProductos(productos)

