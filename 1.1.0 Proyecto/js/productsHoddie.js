const hoddies = [
    { ref: "HD01", nombre: "Hoddie Azul", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies01.jpg", tipo: "hoddie" },
    { ref: "HD02", nombre: "Jogger Violeta", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies02.jpg", tipo: "hoddie" },
    { ref: "HD03", nombre: "Jogger Rosado", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies03.jpg", tipo: "hoddie" },
    { ref: "HD03", nombre: "Jogger Blanco Mariposa", precio: 72200, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies04.jpg", tipo: "hoddie" },
]

console.log(hoddies)
const allProducts = blusas.concat(hoddies, joggers, ninos, novedades, outfits, parejas, variedades)
console.log(allProducts)

let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const hoddie of hoddies) {
    let articulo = document.createElement("article")
    articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
    let imagen = document.createElement("img")
    imagen.setAttribute("class", "card-img-top")
    imagen.src = hoddie.imagen
    articulo.appendChild(imagen)
    let info = document.createElement("div")
    info.setAttribute("class", "card-body")
    articulo.appendChild(info)
    let nombre = document.createElement("h5")
    nombre.innerHTML = `<h5 class="card-title text-center"> ${hoddie.nombre}</h5>`
    info.appendChild(nombre)
    let precio = document.createElement("h5")
    precio.innerHTML = `<h5 class="card-title text-center"> $ ${hoddie.precio}</h5>`
    info.appendChild(precio)
    let fin = document.createElement("a")
    fin.innerHTML = `<a id=${hoddie.ref} class="btn btn-outline-dark w-100 btn__carrito">Agregar a Carrito</a>`
    info.appendChild(fin)
    articulos.appendChild(articulo)
}
document.getElementById("mostrador").appendChild(articulos)