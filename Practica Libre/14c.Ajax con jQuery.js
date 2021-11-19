//JQuery AJAX
//GET
function obtenerDatos() {
    const URLGET = "https://api.itbook.store/1.0/new";
    $.get(URLGET).done(function(respuesta, estado) {
        console.log("Estado que retorna la api de libros: " + estado);
        if (estado == "success") {
            let arrayLibros = respuesta.books;
            arrayLibros.forEach(libro => {
                $("#libros").append("<tr><td>" + libro.title + "</td><td><img src=" + libro.image + "></td></tr>");
            });
        }
    });
}
obtenerDatos();
//POST
function enviarDatos() {
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";
    let objetoJson = {
        "userId": 3,
        "title": "JS Practicando",
        "body": "bla bla bla"
    }
    $.post(URLPOST, objetoJson).done(function(data, estado) {
        console.log("Estado de JSONPlaceholder: " + estado);
        console.log(data);
    });
}
enviarDatos();
//JSON LOCAL
const miJSON = "14c.Ajax con jQuery.json";
console.log("Help" + miJSON)
$("#empleados").prepend('<button id="miBoton">Obtener Empleados</button>');
$("#miBoton").click(() => {

    $.getJSON(miJSON, function(respuesta, estado) {
        if (estado == "success") {
            let misEmpleados = respuesta.usuarios;
            console.log("Mi: " + misEmpleados)
            for (const empleado of misEmpleados) {
                $("#empleados").prepend(`<div>
                <h3>${empleado.nombre}</h3>
                <p>${empleado.puesto}</p>
                </div>`);
            }
        }
    });
});
//.AJAX
$(document).ready(function() {
    //Declaramos la url del API
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';
    //Declaramos la información a enviar
    const infoPost = { nombre: "Ana", profesion: "Programadora" }
        //Agregamos un botón con jQuery
    $("body").prepend('<button id="btn1">ENVIAR API</button>');
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                $("body").prepend(`<div>${respuesta.nombre}</div>`);
                console.log(respuesta);
            }
        });
    });
});