//Array de seccione
const secciones = [
        { id: "mostradorCamisetas", nombre: "blusas", tipo: "blusa" },
        { id: "mostradorHoddies", nombre: "hoddies", tipo: "hoddie" },
        { id: "mostradorJoggers", nombre: "joggers", tipo: "jogger" },
        { id: "mostradorNinos", nombre: "ninos", tipo: "nino" },
        { id: "mostradorParejas", nombre: "parejas", tipo: "pareja" },
        { id: "mostradorNovedades", nombre: "novedades", tipo: "novedad" },
        { id: "mostradorOutfits", nombre: "outfits", tipo: "outfit" },
        { id: "mostradorVariedades", nombre: "Variedades", tipo: "variedad" }
    ]
    //Aca van todos los productos//
const allProducts = [
    //camisetas
    { ref: "CM01", nombre: "Camiseta Nasa", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta01.jpg", tipo: "blusa", seccion: "#mostradorCamisetas", marca: "" },
    { ref: "CM02", nombre: "Camiseta Adonai", precio: 35900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta02.jpg", tipo: "blusa", seccion: "#mostradorCamisetas", marca: "" },
    { ref: "CM03", nombre: "Camiseta Juda", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta03.jpg", tipo: "blusa", seccion: "#mostradorCamisetas", marca: "" },
    { ref: "CM04", nombre: "Camiseta Boll", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta04.jpg", tipo: "blusa", seccion: "#mostradorCamisetas", marca: "index" },
    { ref: "CM05", nombre: "Camiseta Armado y Peligroso", precio: 35900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Camiseta05.jpg", tipo: "blusa", seccion: "#mostradorCamisetas", marca: "" },
    //Hoddies
    { ref: "HD01", nombre: "Hoddie Azul", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies01.jpg", tipo: "hoddie", seccion: "#mostradorHoddies", marca: "" },
    { ref: "HD02", nombre: "Hoddie Violeta", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies02.jpg", tipo: "hoddie", seccion: "#mostradorHoddies", marca: "" },
    { ref: "HD03", nombre: "Hoddie Rosado", precio: 74400, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies03.jpg", tipo: "hoddie", seccion: "#mostradorHoddies", marca: "index" },
    { ref: "HD04", nombre: "Hoddie Blanco Mariposa", precio: 72200, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Hoodies04.jpg", tipo: "hoddie", seccion: "#mostradorHoddies", marca: "" },
    //Joggers
    { ref: "JG01", nombre: "Jogger Lin100 Gris", precio: 54560, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger01.jpg", tipo: "jogger", seccion: "#mostradorJoggers", marca: "" },
    { ref: "JG02", nombre: "Jogger Lin50 Negro", precio: 58930, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger02.jpg", tipo: "jogger", seccion: "#mostradorJoggers", marca: "" },
    { ref: "JG03", nombre: "Jogger Lin100 Negro", precio: 52100, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger03.jpg", tipo: "jogger", seccion: "#mostradorJoggers", marca: "index" },
    { ref: "JG04", nombre: "Jogger Compacto Rojo", precio: 55150, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Joger04.jpg", tipo: "jogger", seccion: "#mostradorJoggers", marca: "" },
    //Niños
    { ref: "NN01", nombre: "Conjunto Niño Libertad", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos01.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "" },
    { ref: "NN02", nombre: "Conjunto Niño Amarillin", precio: 69900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos02.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "" },
    { ref: "NN03", nombre: "Abrigo Niño Nevado", precio: 49900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos03.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "" },
    { ref: "NN04", nombre: "Buso Niño Pink", precio: 59900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos04.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "index" },
    { ref: "NN05", nombre: "Chompa Niño Clasiquito", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos05.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "index" },
    { ref: "NN06", nombre: "Sudadera Niño Marinera", precio: 79900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Ninos06.jpg", tipo: "nino", seccion: "#mostradorNinos", marca: "" },
    //Parejas
    { ref: "PR01", nombre: "Blusas King and Queen", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas01.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR02", nombre: "Busos del Amor", precio: 99900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas02.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR03", nombre: "Busos Imanados", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas03.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR04", nombre: "Busos Comidas", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas04.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR05", nombre: "Busos Yin Yamn", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas05.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "index" },
    { ref: "PR06", nombre: "Blusas Mrs and Mrs", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas06.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR07", nombre: "Blusas Bosses", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas07.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "" },
    { ref: "PR08", nombre: "Busos Betters", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas08.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "index" },
    { ref: "PR09", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Parejas09.jpg", tipo: "pareja", seccion: "#mostradorParejas", marca: "index" },
    //Parejas
    { ref: "NV01", nombre: "Blusas King and Queen", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad01.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
    { ref: "NV02", nombre: "Busos del Amor", precio: 99900, material: "licra", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad02.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV03", nombre: "Busos Imanados", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad03.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV04", nombre: "Busos Comidas", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad04.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
    { ref: "NV05", nombre: "Busos Yin Yamn", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad05.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV06", nombre: "Blusas Mrs and Mrs", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad06.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV07", nombre: "Blusas Bosses", precio: 69900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad07.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
    { ref: "NV08", nombre: "Busos Betters", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad08.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
    { ref: "NV09", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad09.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV10", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad09.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
    { ref: "NV11", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad09.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "index" },
    { ref: "NV12", nombre: "Busos Princess", precio: 99900, material: "Algodon", descuento: 0, stock: 50, imagen: "../imagenes/productos/catalogo/Novedad09.png", tipo: "novedad", seccion: "#mostradorNovedades", marca: "" },
]

let productosIndex = allProducts.filter(articulo => articulo.marca == "index")

$(document).ready(function() {
    renderizarIndex()
})

function renderizarIndex() {
    //for (let cajon of secciones) {
    //let productos = allProducts.filter(producto => producto.tipo == cajon.tipo)
    for (let producto of productosIndex) {
        // contenedor
        $("#mostradorGeneral").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body ">
                        <h5 class="card-title text-center">${producto.nombre}</h5>
                        <h5 class="card-title text-center">$ ${producto.precio}</h5>
                        <button id=${producto.ref} class="btn btn-outline-warning btn__carrito fs-6">Comprar</button>
                    </div>
                </article>`)
            //Agregar evento al boton
        $(`#${producto.ref}`).on("click", function() {
            agregarCarrito(producto)
        })
    }
    //}
}