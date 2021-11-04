//Boton para agregar al carrito
// let botonCarrito = document.getElementsByClassName("btn__carrito")
// botonCarrito.addEventlistener("click", agregarCarrito)

//Crear el array de productos
const carrito = []
    // let alCarro
    //     //Funcion para agrgar losproductos al carrito 
    // function agregarCarrito(idP) {
    //     alCarro = allProducts.filter(filter => filter.ref = idP)
    //     carrito.push(alCarro)
    // }
let articuloAgregar
let acumulador = 0

function agregarCarrito(evento) {
    // articuloAgregar = allProducts.find(producto => producto.ref === ref)
    // carrito.push(articuloAgregar)
    // Agregar articulo al carrito
    carrito.push(evento.target.getAttribute("marcador"))
    acumulador += 1
        // Calcular Total
    calcularTotal()
        // Actualizar carrito
    renderizarCarrito()

}

console.log(carrito)

//Renderizar el carrito
if (acumulador > 0) {
    let prendas = document.createElement("div")
    prendas.setAttribute("class", "row mx-1 d-flex justify-content-around")
    for (const prenda of carrito) {
        //Contenedor
        let contenedor = document.createElement("article")
        contenedor.setAttribute("class", "card mx-1 col-lg-2 col-md-2 col-sm-6 my-3 pt-2 productos__articulo")
            //Imagen
        let foto = document.createElement("img")
        foto.setAttribute("class", "card-img-top")
        foto.src = prenda.imagen
        contenedor.appendChild(foto)
            //Informacion del articulo
        let datos = document.createElement("div")
        datos.setAttribute("class", "card-body")
        contenedor.appendChild(datos)
            //Nombre del producto
        let detalle = document.createElement("h5")
        detalle.setAttribute("class", "card-title text-center fs-6")
        detalle.textContent = carrito.nombre
        datos.appendChild(detalle)
            //Precio del Producto
        let valor = document.createElement("h5")
        valor.textContent = "$" + carrito.precio
        valor.setAttribute("class", "card-title text-center fs-6")
        datos.appendChild(valor)
            //Boton Quitar del carrito
        let btnQuitar = document.createElement("button")
        btnQuitar.setAttribute("clas", "btn-outline-danger btn-sm w-100 fs-6")
        btnQuitar.textContent = "Quitar"
        btnQuitar.setAttribute("marcador", carrito.ref)
        btnQuitar.setAttribute("id", carrito.ref)
            // btnQuitar.addEventListener("click", quitarCarrito("${carrito.ref}"))
        datos.appendChild(btnQuitar)
            //Agregar la prenda al contenedor general
        prendas.appendChild(contenedor)
    }
    document.getElementById("articulosCarrito ").appendChild(prendas)
} else {
    let vacio = document.createElement("div")
    vacio.setAttribute("classs", "lert alert-primary")
    vacio.setAttribute("role", "alert")
    vacio.textContent = "Opps! Tu carrieto esta vacio. Vamos a agregar tus productos."
    document.getElementById("articulosCarrito").appendChild(vacio)
}


//Funcion para Quitar elementos del carrito
function quitarCarrito(marcador) {

}