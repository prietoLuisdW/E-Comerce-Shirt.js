//comentario simple//
/*Comentarios de mas de una linea
comentario de mas de una linea*/

//variables, declaracion y asignacion//
var edad = 55;
let edad2 = 30;
const Valor = 3;

let suma = edad + edad2;
let resta = edad - edad2;
let multiplicacion = edad * edad2;
let division = edad / Valor

let nombre = "Pepe";
let apellido = "Alvarez";
let nombreCompleto = nombre + " " + apellido

console.log("Hola, Bienvenido...!");
console.log("Nada que ver");
console.log("La suma de las edades es: " + suma);
console.log("Nombre Completo: " + nombreCompleto);

alert("Hola, Bienvenido " + nombreCompleto);

//Entrada de datos al navegador por parte del usuario//
let nombreIngresado = prompt("Hola. Ingresa tu nombre");
alert("Bienvenido " + nombreIngresado);
let numeroIngresado = parseInt(prompt("Ingrese un numero"));//Hay que parcearlo//
let sumaNumero = numeroIngresado + 3;
console.log("La suma del numero es: " + sumaNumero);