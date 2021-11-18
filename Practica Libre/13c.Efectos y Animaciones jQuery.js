//Jquery efectos y animaciones
$("#dinos").hide();
$("#dinos2").hide();​
//eventos de boton para disparar fades
$("#muestraParrafo").click(function() {
    $("#parrafo").fadeIn("slow");
});​
$("#ocultaParrafo").click(function() {
    $("#parrafo").fadeOut("fast", function() {
        console.log("Fin del fadeOut");
    });
});​
$("#muestraOculta").click(function() {
        $("#dinos2").fadeToggle(2000, function() {
            if ($("#muestraOculta").html() == "Mostrar Imagen con FadeToggle") {
                $("#muestraOculta").html("Ocultar Imagen con FadeToggle");
            } else {
                $("#muestraOculta").html("Mostrar Imagen con FadeToggle");
            }
        });
    })​
    //slides
$("#slideImagen").click(function() {
    $("#dinos").slideDown("slow");
});​
$("#slideImagenUp").click(function() {
    $("#dinos").slideUp("slow");
});​
//animate
$("body").prepend("<h1 class='titulo'>Animaciones con JQuery</h1>");
//animamos algunas propiedades de css
$(".titulo").animate({
        opacity: 0.25,
        height: 200
    },
    6000,
    function() {
        console.log("Fin del método animate");
    });​
//animaciones encadenadas
$("body").append("<h1 id='abajo'>Fin de la Web</h1>");
$("#abajo").css("color", "green")
    .delay(6000)
    .slideUp(2000)
    .slideDown(2000);​
//DIAPO 32
// Array de objetos para agregar información al DOM.
const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan", precio: 50 },
    { id: 4, nombre: "Flan", precio: 100 }
];
// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function() {
    $(".btnComprar").click(function(e) {
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).slideUp("slow");
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto ademas de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}