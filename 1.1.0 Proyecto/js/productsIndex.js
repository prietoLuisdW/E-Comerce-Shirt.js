const joggers = [
    {ref: "JG01", nombre: "Jogger Lin100 Gris", precio: 54560, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger01.jpg"},
    {ref: "JG02", nombre: "Jogger Lin50 Negro", precio: 58930, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger02.jpg"},
    {ref: "JG03", nombre: "Jogger Lin100 Negro", precio: 52100, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger03.jpg"},
    {ref: "JG03", nombre: "Jogger Compacto Rojo", precio: 55150, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger01.jpg"},
]

console.log(joggers)

let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const jogger of joggers){
    let articulo = document.createElement("article")
        articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
        let imagen = document.createElement("img")
            imagen.setAttribute("class", "card-img-top")
            imagen.src = jogger.imagen
            articulo.appendChild(imagen)
        let info = document.createElement("div")
            info.setAttribute("class", "card-body")
            articulo.appendChild(info)
            let nombre = document.createElement("h5")
                nombre.innerHTML = `<h5 class="card-title text-center"> ${jogger.nombre}</h5>` 
                info.appendChild(nombre)
            let precio = document.createElement("h5")
                precio.innerHTML = `<h5 class="card-title text-center"> $ ${jogger.precio}</h5>`
                info.appendChild(precio)
            let fin = document.createElement("a")
                fin.innerHTML = `<a href="#" class="btn btn-outline-dark w-100">Agregar a Carrito</a>`
                info.appendChild(fin)
        articulos.appendChild(articulo)
}       
document.getElementById("mostrador").appendChild(articulos)