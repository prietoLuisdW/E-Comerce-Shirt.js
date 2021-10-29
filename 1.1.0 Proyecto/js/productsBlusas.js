const blusas = [
    {ref: "JG01", nombre: "Camiseta Nasa", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta01.jpg"},
    {ref: "JG02", nombre: "Camiseta Adonai", precio: 35900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta02.jpg"},
    {ref: "JG03", nombre: "Camiseta Juda", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta03.jpg"},
    {ref: "JG03", nombre: "Camiseta Boll", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta04.jpg"},
    {ref: "JG03", nombre: "Camiseta Armado y Peligroso", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta05.jpg"},
]

console.log(blusas)

let articulos = document.createElement("div")
articulos.setAttribute("class", "row mx-1 d-flex justify-content-around")

for (const blusa of blusas){
    let articulo = document.createElement("article")
        articulo.setAttribute("class", "card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo")
        let imagen = document.createElement("img")
            imagen.setAttribute("class", "card-img-top")
            imagen.src = blusa.imagen
            articulo.appendChild(imagen)
        let info = document.createElement("div")
            info.setAttribute("class", "card-body")
            articulo.appendChild(info)
            let nombre = document.createElement("h5")
                nombre.innerHTML = `<h5 class="card-title text-center"> ${blusa.nombre}</h5>` 
                info.appendChild(nombre)
            let precio = document.createElement("h5")
                precio.innerHTML = `<h5 class="card-title text-center"> $ ${blusa.precio}</h5>`
                info.appendChild(precio)
            let fin = document.createElement("a")
                fin.innerHTML = `<a href="#" class="btn btn-outline-dark w-100">Agregar a Carrito</a>`
                info.appendChild(fin)
        articulos.appendChild(articulo)
}       
document.getElementById("mostrador").appendChild(articulos)