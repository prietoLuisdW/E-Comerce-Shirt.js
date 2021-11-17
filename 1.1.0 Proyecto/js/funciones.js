//
$(document).ready(function() {
    renderizarProductos()
})

function renderizarProductos() {
    //for (let cajon of secciones) {
    //let productos = allProducts.filter(producto => producto.tipo == cajon.tipo)
    for (let producto of allProducts) {
        // contenedor
        $(producto.seccion).append(`
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


//Si no hay elementos en el carrieto saldra una alerta
function carritoLimpio() {
    $("#articulosCarrito").append(`
    <div class="alert alert-primary" role="alert">
        Opps! No tenemos productos an agregados
    </div>`)

}

//Si hay productos en el carrieto, se renderizara
function renderizarCarrito(carrito) {
    let elementos = JSON.parse(localStorage.getItem("listaArticulos"))
        //Variables para totalizar
    let subtotal = 0
    let descuento = 0
    let envio = 0
    const tasaIva = 0.19
    let impuestoIva = 0
    let totalPagar = 0
    let items = elementos.length
    for (item of elementos) {
        subtotal += item.precio
        descuento += item.descuento
    }
    //Calcular el costo de envio
    if (subtotal > 100000) {
        envio = 0
    } else if (subtotal >= 5000) {
        envio = subtotal * 0.1
    } else if (subtotal >= 25000) {
        envio = subtotal * 0.2
    } else if (subtotal > 0) {
        envio = 5000
    } else {
        envio = 0
    }
    //Calcular Iva
    impuestoIva = subtotal * tasaIva
        //Calcular Total a pagar
    totalPagar = subtotal - descuento + impuestoIva + envio

    $(".totalVenta").append(`
        <div class="d-flex justify-content-between">
            <h5 class="fs-5"> Total Items: Comprados<h5>
            <h5 class="fs-5"> ${items}<h5>
        </div>
        <div class="d-flex justify-content-between">
            <h5 class="fs-5"> Subtotal:<h5>
            <h5 class="fs-5">$ ${subtotal}<h5>
        </div>
        <div class=" d-flex justify-content-between">
            <h5 class="fs-5"> Descuentos:<h5>
            <h5 class="fs-5"> $ ${descuento}<h5>
        </div>
        <div class=" d-flex justify-content-between">
            <h5 class="fs-5"> Impuesto Iva:<h5>
            <h5 class="fs-5"> $ ${impuestoIva}<h5>
        </div>
        <div class=" d-flex justify-content-between">
            <h5 class="fs-5"> Costo Envio:<h5>
            <h5 class="fs-5"> ${envio}<h5>
        </div>
        <div class=" d-flex justify-content-between">
            <h5 class="fs-5"> Total a Pagar:<h5>
            <h5 class="fs-5 "> $${totalPagar}<h5>
        </div>
        <button id="vaciar" class="btn btn-warning btn__carrito fs-5 w-100">Vaciar el Carrito</button>`)
    $(`#vaciar`).on("clisck", function() {
        vaciarCarrito()
    })
    for (let articulo of elementos) {
        $("#articulosCarrito").append(`
        <article class="card mx-1 col-lg-2 col-md-2 col-sm-3 col-xm-12 my-3 pt-2 productos__articulo">
            <img src=${articulo.imagen} class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title text-center fs-6">${articulo.nombre}</h5>
                <h5 class="card-title text-center fs-6">$ ${articulo.precio}</h5>
                <button id=${articulo.ref} class="btn btn-outline-danger btn__carrito fs-6">Quitar</button>
            </div>
        </article>`)
            //Boton Quitar del carrito
        $(`#${articulo.ref}`).on("click", function() {
            quitarElemento(articulo)
        })
    }
}




//Quitar un artuculo del carrito
function quitarElemento(articulo) {

}

//Vaciar el carrieto
function vaciarCarrito() {
    carrito = []
    localStorage.setItem("listaArticulos", JSON.stringify(carrito))
    renderizarCarrito(carrito)
    carritoLimpio()
}