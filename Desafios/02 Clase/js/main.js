let nombre1 = prompt("Ingresa tu Nombre")
let edad1 = parseInt(prompt("Ingresa tu edad"))
let nombre2 = prompt("Ingresa el nombre de tu amigo")
let edad2 = parseInt(prompt("Ingresa la edad de un amigo"))
let diferencia1 = edad1 - edad2
let diferencia2 = edad2 - edad1
let suma = (edad1 + edad2)
let promedio = suma / 2

if ((edad1 == "") || (edad2 == "") || (nombre1 == "") || (nombre2 == "")){
        alert("Error! Ingrese los datos")
}else if(edad1 == edad2){
    alert("Tu y " + nombre2 + " tienen la misma edad")
}else if((edad1 != "") && (edad2 != "") && (edad1 > edad2)){
    alert("Tu eres mayor que " + nombre2 + " por " + diferencia1 + " Años")
}else if(edad2 > edad1){
    alert(nombre2 + " es mayor que tu por " + diferencia2 + " Años")
}
alert("La suma de sus edades es " + suma + " Años.")
alert("El promedio de sus edades es " + promedio + " Años.")