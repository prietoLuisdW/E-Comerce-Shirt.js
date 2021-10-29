const ninos = [
    {ref: "NN01", nombre: "Conjunto Niño Libertad", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos01.jpg"},
    {ref: "NN02", nombre: "Conjunto Niño Amarillin", precio: 69900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos02.jpg"},
    {ref: "NN03", nombre: "Abrigo Niño Nevado", precio: 49900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos03.jpg"},
    {ref: "NN04", nombre: "Buso Niño Pink", precio: 59900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos04.jpg"},
    {ref: "NN05", nombre: "Chompa Niño Clasiquito", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos05.jpg"},
    {ref: "NN06", nombre: "Sudadera Niño Marinera", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos06.jpg"},
]

console.log(ninos)

let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const nino of ninos){
    let articulo = document.createElement("article")
        articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
        let imagen = document.createElement("img")
            imagen.setAttribute("class", "card-img-top")
            imagen.src = nino.imagen
            articulo.appendChild(imagen)
        let info = document.createElement("div")
            info.setAttribute("class", "card-body")
            articulo.appendChild(info)
            let nombre = document.createElement("h5")
                nombre.innerHTML = `<h5 class="card-title text-center"> ${nino.nombre}</h5>` 
                info.appendChild(nombre)
            let precio = document.createElement("h5")
                precio.innerHTML = `<h5 class="card-title text-center"> $ ${nino.precio}</h5>`
                info.appendChild(precio)
            let fin = document.createElement("a")
                fin.innerHTML = `<a href="#" class="btn btn-outline-dark w-100">Agregar a Carrito</a>`
                info.appendChild(fin)
        articulos.appendChild(articulo)
}       
document.getElementById("mostrador").appendChild(articulos)