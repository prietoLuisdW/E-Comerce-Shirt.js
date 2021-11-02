const parejas = [
    { ref: "PR01", nombre: "Blusas King and Queen", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas01.jpg", tipo: "pareja" },
    { ref: "PR02", nombre: "Busos del Amor", precio: 99900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas02.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Busos Imanados", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas03.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Busos Comidas", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas04.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Busos Yin Yamn", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas05.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Blusas Mrs and Mrs", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas06.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Blusas Bosses", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas07.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Busos Betters", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas08.jpg", tipo: "pareja" },
    { ref: "PR03", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas09.jpg", tipo: "pareja" },
]

console.log(parejas)

let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const pareja of parejas) {
    let articulo = document.createElement("article")
    articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
    let imagen = document.createElement("img")
    imagen.setAttribute("class", "card-img-top")
    imagen.src = pareja.imagen
    articulo.appendChild(imagen)
    let info = document.createElement("div")
    info.setAttribute("class", "card-body")
    articulo.appendChild(info)
    let nombre = document.createElement("h5")
    nombre.innerHTML = `<h5 class="card-title text-center"> ${pareja.nombre}</h5>`
    info.appendChild(nombre)
    let precio = document.createElement("h5")
    precio.innerHTML = `<h5 class="card-title text-center"> $ ${pareja.precio}</h5>`
    info.appendChild(precio)
    let fin = document.createElement("a")
    fin.innerHTML = `<a id=${pareja.ref} class="btn btn-outline-dark w-100 btn__carrito">Agregar a Carrito</a>`
    info.appendChild(fin)
    articulos.appendChild(articulo)
}
document.getElementById("mostrador").appendChild(articulos)