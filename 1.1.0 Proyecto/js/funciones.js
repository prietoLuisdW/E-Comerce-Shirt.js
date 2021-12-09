//
let productosIndex
let producto
let misProductos
let productoFiltrado
let id
let seccion

$(document).ready(function() {
    importarProductos()
})

// Importar los productos desde el Json y llamar la funcione de renderizar los mostradores
// y los respectivos prodductos

function importarProductos() {
    const miJson = "../json/productos.json"
    console.log("misPro: " + miJson)
    $.getJSON(miJson, function(datos, status) {
        console.log(status)
        if (status == "success") {
            misProductos = datos.productos
            productoFiltrado = misProductos
            console.log("Mis Productos" + misProductos)
            console.log("Mis Productos Filtrado" + productoFiltrado)
            productosIndex = misProductos.filter(articulo => articulo.marca == "index")
            mostradores()
        }
    })
}

let secciones = [
    { id: 1, nombre: "Blusas", mostrador: "mostradorCamisetas", ruteo: "mosCamisetas" },
    { id: 1, nombre: "Hodies", mostrador: "mostradorHoddies", ruteo: "mosHoddies" },
    { id: 3, nombre: "Joggers", mostrador: "mostradorJoggers", ruteo: "mosJoggers" },
    { id: 4, nombre: "Niños", mostrador: "mostradorNinos", ruteo: "mosNinos" },
    { id: 5, nombre: "Parejas", mostrador: "mostradorParejas", ruteo: "mosParejas" },
    { id: 6, nombre: "Novedades", mostrador: "mostradorNovedades", ruteo: "Novedades" }
]

//Crear los mostradores
function mostradores() {
    for (seccion of secciones) {
        $("#misSecciones").append(`
        <div>
            <hr id=${seccion.ruteo} class="hr">
            <h2 class="ps-2 fs-5 py-2 text-black bg-tittles titles__productos">${seccion.nombre}</h2>
            <div class="container-fluid">
                <div id=${seccion.mostrador} class="row mx-1 d-flex justify-content-around">
                    
                </div>
            </div>
        </div>
        `)
    }
    renderizarIndex()
}

function renderizarIndex() {
    //for (let cajon of secciones) {
    //let productos = allProducts.filter(producto => producto.tipo == cajon.tipo)
    for (producto of productoFiltrado) {
        console.log("Index: " + productoFiltrado)
            // contenedor
        $(producto.seccion).append(` 
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                <img src=${producto.imagen} class="card-img-top"></img>
                <div class="card-body">
                <h5 class="card-title text-center">${producto.nombre}</h5>
                <h5 class="card-title text-center">$ ${producto.precio}</h5>
                <a id=${producto.ref} class="btn btn-outline-warning btn__carrito fs-6"> Comprar </a> 
                </div> 
                </article>
                `)
            //Agregar evento al boton
        $(`#${producto.ref}`).on("click", function() {
            agregarCarrito(producto)
        })
    }
}



let carrito

function agregarCarrito(nuevoProducto) {
    carrito = localStorage.getItem("listaArticulos")
    console.log("carrito Inicial: " + carrito)
    if (!carrito) {
        //Crear un aviso para indicar que el carrito no tiene articulos
        carrito = []
            // carritoLimpio()
    } else {
        //Bajar el array que existe en el Local Storage como Carrito
        carrito = JSON.parse(localStorage.getItem("listaArticulos"))
            //Limpiar el Local Storage
            // localStorage.clear
    }
    console.log(carrito)
        //Pushear en nuevo producto
    carrito.push(nuevoProducto)
    console.log("Carrito Final: " + carrito)
        //Cargar el nuevo carrito al Local Storage
    localStorage.setItem("listaArticulos", JSON.stringify(carrito))
    Swal.fire(
            'Tu producto ha sido agregado',
            nuevoProducto.nombre,
            'success'
        )
        // renderizarCarrito(carrito)
}