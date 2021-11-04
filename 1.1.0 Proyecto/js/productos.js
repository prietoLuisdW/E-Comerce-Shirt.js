//Aca van todos los productos//
const allProducts = [
    //camisetas
    { ref: "CM01", nombre: "Camiseta Nasa", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta01.jpg", tipo: "blusa" },
    { ref: "CM02", nombre: "Camiseta Adonai", precio: 35900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta02.jpg", tipo: "blusa" },
    { ref: "CM03", nombre: "Camiseta Juda", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta03.jpg", tipo: "blusa" },
    { ref: "CM04", nombre: "Camiseta Boll", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta04.jpg", tipo: "blusa" },
    { ref: "CM05", nombre: "Camiseta Armado y Peligroso", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta05.jpg", tipo: "blusa" },
    //Hoddies
    { ref: "HD01", nombre: "Hoddie Azul", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies01.jpg", tipo: "hoddie" },
    { ref: "HD02", nombre: "Jogger Violeta", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies02.jpg", tipo: "hoddie" },
    { ref: "HD03", nombre: "Jogger Rosado", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies03.jpg", tipo: "hoddie" },
    { ref: "HD04", nombre: "Jogger Blanco Mariposa", precio: 72200, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies04.jpg", tipo: "hoddie" },
    //Joggers
    { ref: "JG01", nombre: "Jogger Lin100 Gris", precio: 54560, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger01.jpg", tipo: "jogger" },
    { ref: "JG02", nombre: "Jogger Lin50 Negro", precio: 58930, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger02.jpg", tipo: "jogger" },
    { ref: "JG03", nombre: "Jogger Lin100 Negro", precio: 52100, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger03.jpg", tipo: "jogger" },
    { ref: "JG04", nombre: "Jogger Compacto Rojo", precio: 55150, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger04.jpg", tipo: "jogger" },
    //Niños
    { ref: "NN01", nombre: "Conjunto Niño Libertad", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos01.jpg", tipo: "nino" },
    { ref: "NN02", nombre: "Conjunto Niño Amarillin", precio: 69900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos02.jpg", tipo: "nino" },
    { ref: "NN03", nombre: "Abrigo Niño Nevado", precio: 49900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos03.jpg", tipo: "nino" },
    { ref: "NN04", nombre: "Buso Niño Pink", precio: 59900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos04.jpg", tipo: "nino" },
    { ref: "NN05", nombre: "Chompa Niño Clasiquito", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos05.jpg", tipo: "nino" },
    { ref: "NN06", nombre: "Sudadera Niño Marinera", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos06.jpg", tipo: "nino" },
    //Parejas
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

console.log(allProducts)

//Crear el mostrador para todos los productos
const blusas = allProducts.filter(producto => producto.tipo == "blusa")
console.log(blusas)
const hoddies = allProducts.filter(producto => producto.tipo == "hoddie")
console.log(hoddies)
const joggers = allProducts.filter(producto => producto.tipo == "jogger")
console.log(joggers)
const ninos = allProducts.filter(producto => producto.tipo == "nino")
console.log(ninos)
const parejas = allProducts.filter(producto => producto.tipo == "pareja")
console.log(parejas)