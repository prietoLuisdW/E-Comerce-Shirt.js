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