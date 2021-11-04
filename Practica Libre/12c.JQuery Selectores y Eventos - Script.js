//JQUERY
let carrito = []
$(document).ready(function() {
    //cambios en el DOM
    $("#fila_prueba").css({ background: 'red', color: 'white' });
    $("#boton").prepend("<button class='btn btn-warning' id='btnSuscrip'>Suscribir al Newsletter</button>");
    $("#btnSuscrip").click(function() {
        suscribir();
    });
    //llamada a renderizar
    renderizarProductos()
        //Selector con ordenamiento
    $("#miSeleccion").on('change', function() {
        ordenar();
    });
    $("#miSeleccion option[value='pordefecto']").attr("selected", true);
});

function renderizarProductos() {
    for (const producto of productos) {
        $(".milista").append(`<li class="list-group-item">
        <h3> ID: ${producto.id} </h3>
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <p><strong> $ ${producto.precio} </strong></p>
        <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`);
        //Evento para cada boton
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        })
    }
}

function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    Swal.fire(
        'Nuevo producto agregado al carro',
        productoNuevo.nombre,
        'success'
    );
}

function suscribir() {
    $("#suscripcion").append(`
    <h4>Suscribete a nuestro newsletter</h4>
    <form id="miFormulario">
    <input type="text" id="email" placeholder="Aqui tu email">
    <button type="submit" class="btn btn-warning">Suscribete ahora</button>
    </form>`);
    //EVENTO
    $("#miFormulario").submit(function(e) {
        //prevenir el comportamiento por defecto
        e.preventDefault();
        //aca una buena validacion de los campos
        //Mensaje de confirmacion de suscripcion
        Swal.fire(
            'Nueva suscripcion realizada',
            $("#email").val(),
            'success'
        )
        $("#suscripcion").empty();
    });
}


function ordenar() {
    let seleccion = $("#miSeleccion").val();
    //console.log(seleccion);
    if (seleccion == "menor") {
        //ordeno el array de productos por precio de menor a mayor
        productos.sort(function(a, b) { return a.precio - b.precio });
    } else if (seleccion == "mayor") {
        //ordeno el array de productos por precio de mayor a menor
        productos.sort(function(a, b) { return b.precio - a.precio });
    } else if (seleccion == "alfabetico") {
        //ordeno por orden alfabetico
        productos.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductos();
}