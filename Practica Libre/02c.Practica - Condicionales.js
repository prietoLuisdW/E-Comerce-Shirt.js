//Condicionales

let numero = parseInt(prompt("Ingrese un Numero"))
if(numero==7){
    console.log("Acertaste")
} else{
    console.log("Perdiste")
}

//Condiciones anidadas
let edadMessi = parseInt(prompt("Que edad tiene Messi?"))
let puntos = 0
if (edadMessi == 34) {
    console.log("Excelente, sumas un punto")
    puntos = puntos + 1
}else if (edadMessi < 34){
    console.log("Le faltarn unos años. Messi tiene 34 Años")
    puntos = puntos + -1
}else {
    console.log("Messi no estan viejo. Tiene 34 Años")
    puntos = puntos -1
}
console.log("Puntaje Total: " + puntos)


//Variables Booleanas
let edadUsuario = parseInt(prompt("Ingrese su edad"))
let esMayorEdad = (edadUsuario > 17)
console.log("El usuario es mayor de edad: " + esMayorEdad)
if(esMayorEdad){
    console.log("Usted es mayor de edad")
}else{
    console.log("Usted es menor de edad")
}

//Operadores
//a == b --> Es igual
//a === b --> Estrictamente Igual 'Tipo y valor
//a != b --> Es distinto
//a !== b --> Es estrictamente distinto
//a && b --> And
//a || b --> Or
//!a --> Not

let num1 = 1
let numUno = "1"
let sonIguales = (num1 == numUno)
console.log("Los numero son iguales: " + sonIguales)
let sonEstrictamenteIguales = (num1 === numUno)
console.log("Los numero son iguales: " + sonEstrictamenteIguales)

//And / Or
let colorFavorito = prompt("Cual es mi color favorito?")
if((colorFavorito == "Azul") || (colorFavorito == "Azul") || (colorFavorito == "AZUL")) {
    console.log("Acertaste")
}else{
    console.log("Perdiste. Mi color favorito es el Azul")
}
