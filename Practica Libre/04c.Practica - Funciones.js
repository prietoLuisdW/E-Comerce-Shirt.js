


//Con parametros
let resultado
function restaParametros(num1, num2) {
    resultado = num1 - num2
}
restaParametros(89, 9)
console.log("El resultado de la resta es: " + resultado)
let edad1 = parseInt(prompt("Ingresa la edad1"))
let edad2 = parseInt(prompt("Ingrese la edad2"))
restaParametros(edad1, edad2)
console.log("La diferecia de las edades es " + resultado)

//Con parametros y retorno
function concatenarTexto(texto1, texto2) {
    let textoConcatenado = texto1 + " " + texto2
    return textoConcatenado
}
let nombre = prompt("Ingrese su nombre")
let apellidos = prompt("Ingrse su apellido")
concatenarTexto(nombre, apellidos)
let nombreCompleto = concatenarTexto(nombre, apellidos)
console.log("Buenos dias " + nombreCompleto)