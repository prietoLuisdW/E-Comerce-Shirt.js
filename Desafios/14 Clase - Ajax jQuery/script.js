function datosDibujar() {
    const urlGet = "https://api.itbook.store/1.0/search/mongodb"
    $.get(urlGet).done(function(datos, status) {
        console.log("Estado: " + status)
        if (status == "success") {
            let libreria = datos.books
            console.log(libreria)
            libreria.forEach(cosa => {
                $("#app").append(`
                <article class="card mx-1 col-lg-3 col-md-6 col-sm-12 my-3 pt-2 productos__articulo">
                    <img src=${cosa.image} class="card-img-top"></img>
                    <div class="card-body ">
                        <h5 class="card-title text-center">${cosa.price}</h5>
                        <h5 class="card-title text-center">$ ${cosa.title}</h5>
                        <button id=${cosa.isbn13} class="btn btn-outline-warning btn__carrito fs-6">Comprar</button>
                    </div>
                </article>`)
            });
        }
    })
}
datosDibujar()