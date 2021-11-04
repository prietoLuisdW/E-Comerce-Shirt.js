let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const jogger of joggers) {
    // contenedor
    let articulo = document.createElement("article")
    articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
        //Imagen
    let imagen = document.createElement("img")
    imagen.setAttribute("class", "card-img-top")
    imagen.src = jogger.imagen
    articulo.appendChild(imagen)
        //Informacion del articulo
    let info = document.createElement("div")
    info.setAttribute("class", "card-body")
    articulo.appendChild(info)
        //Nombre del producto
    let nombre = document.createElement("h5")
    nombre.setAttribute("class", "card-title text-center")
    nombre.textContent = jogger.nombre
    info.appendChild(nombre)
        //Precio del Producto
    let precio = document.createElement("h5")
    precio.textContent = "$" + jogger.precio
    precio.setAttribute("class", "card-title text-center")
    info.appendChild(precio)
        //Boton para agregar al carrito
    let botonCarrito = document.createElement("button")
    botonCarrito.classList.add("btn", "btn-outline-dark", "w-100", "btn__carrito")
    botonCarrito.textContent = "Agregar al Carrito"
    botonCarrito.setAttribute("marcador", jogger.ref)
    botonCarrito.setAttribute("id", jogger.ref)
        // botonCarrito.addEventListener("click", agregarCarrito("${jogger.ref}"))
    info.appendChild(botonCarrito)
    articulos.appendChild(articulo)
}
document.getElementById("mostrador").appendChild(articulos)