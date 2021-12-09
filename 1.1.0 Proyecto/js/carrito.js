$(document).ready(function() {
    carrito = localStorage.getItem("listaArticulos")
    console.log(carrito)
    if (!carrito) {
        carritoLimpio()
        $(".totalVenta").hide()
    } else {
        renderizarCarrito()
    }
})

//Si hay productos en el carrieto, se renderizara
function renderizarCarrito() {
    let elementos = JSON.parse(localStorage.getItem("listaArticulos"))
        //Variables para totalizar
    let subtotal = 0
    let descuento = 0
    let envio = 0
    const tasaIva = 0.19
    let impuestoIva = 0
    let totalPagar = 0
    let items = elementos.length
    console.log(items)
    console.log(elementos)
    for (let item of elementos) {
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
            <h5 class="fs-5"> Total Items Comprados<h5>
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
        <div class="d-flex vaciarComprar">
            <a id="vaciar" class="m-2 btn btn-warning btn__carrito fs-5 w-100" href="bolsita.html">Vaciar el Carrito</a>
            <button id="comprar" class="m-2 btn btn-success btn__carrito fs-5 w-100">Finalizar Compra</button>
        </div>`)
    $(`#vaciar`).on("click", function() {
        vaciarCarrito()
    })
    $(`#comprar`).on("click", function() {
        finalizarCompra()
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
    localStorage.clear()
    $("#articulosCarrito").slideUp("slow")
    $(".totalVenta").hide()
    carritoLimpio()
    renderizarCarrito()
}

//Si no hay elementos en el carrieto saldra una alerta
function carritoLimpio() {
    $("#articulosCarrito").append(`
    <div class="alert alert-primary" role="alert">
        Opps! No tenemos productos aún agregados
    </div>`)

}

//Para ingresar la informacion de envio y facturacion
function finalizarCompra() {
    $(".vaciarComprar").css("display", "none")
    $(`#articulosCarrito`).prepend(`
    <div class="row justify-content-center">
        <form class="col-md-8 col-lg-8 col-sm-12 bg-light mx-4 p-5 my-4 ">
            <fieldset>
                <legend class="fs-5 fw-bold"> Datos del Cliente</legend>
                <legend class="fs-6 fw-normal"> Ingrese los siguientes datos. Ten en cuenta que estos seran los considerados para hacer el nevio de sus productos y para la facturacion.
                </legend>
                <div class="row mb-1">
                    <div class="col">
                        <select id="tipoIdentificacion" class="form-select">
						<option selected>Tipo de Identificación</option>
						<option>Cedula de Ciudadania</option>
						<option>Cedula de Extrajeria</option>
						<option>Pasaporte</option>
						<option>Permiso Especial</option>
						</select>
                    </div>
                    <div class="col">
                        <input type="text" id="numeroIdentificacion" class="form-control" placeholder="Numero de Identificación">
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre (s)" aria-label="First name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido (s)" aria-label="Last name">
                    </div>
                </div>
                <div class="mb-1 row">
                    <div class="col">
                        <input type="email" id="email" class="form-control" placeholder="Correo Electronico">
                    </div>
                </div>
                <div class="mb-1 row">
                    <div class="col">
                        <input type="text" id="text" class="form-control" placeholder="Ciudad">
                    </div>
                    <div class="col">
                        <input type="text" id="email" class="form-control" placeholder="Direccion de Envio">
                    </div>
                </div>
                <div class="mb-1">
                    <button id="logonPagar" type="submit" class="btn btn-dark gap-2">Pagar</button>
                </div>
            </fieldset>
        </form>
    </div>
    `)
    $(`#LogonPagar`).on("click", function() {
        finalizado()
    })
}

function finalizado() {
    Swal.fire({
        title: 'Gracias por tu Compra!',
        text: "Te Enviaremos a nuestro Portal de Pagos. Desea ir a Pagar",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero pagar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Perfecto',
                'Nos veremos muy pronto',
                'success'
            )
        }
    })
}