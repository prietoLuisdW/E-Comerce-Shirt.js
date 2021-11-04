function agregarCarrito(nuevoProducto) {
    carrito.push(nuevoProducto)
    console.log(carrito)
    Swal.fire(
        'Tu producto ha sido agregado',
        nuevoProducto.nombre,
        'success'
    )
    renderizarCarrito()
}

function renderizarCarrito() {
    let items = carrito.length
    console.log(items)
    if (items == 0) {

    }
}


function renderizarBusos() {
    for (let producto of hoddies) {
        // contenedor
        $("#mostrador").append(`
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
}

function renderizarBlusas() {
    for (let producto of blusas) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarJoggers() {
    for (let producto of joggers) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarNinos() {
    for (let producto of ninos) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarNovedades() {
    for (let producto of novedades) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarOutfits() {
    for (let producto of outfits) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarParejas() {
    for (let producto of parejas) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}

function renderizarVariedades() {
    for (let producto of variedades) {
        // contenedor
        $("#mostrador").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${producto.imagen} class="card-img-top"></img>
                    <div class="card-body">
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
}