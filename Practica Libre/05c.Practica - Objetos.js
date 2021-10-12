//Objetos
//Objetos Literales
const lapicero = {
    color:"verde",
    marca:"bic",
    trazo:"fino",
    precio:50
}
console.log(lapicero)
console.log(lapicero.marca)
console.log(lapicero["color"])
console.log(lapicero.precio)

lapicero.precio=60
console.log(lapicero.precio)

//Funcion Constrcutora
function automovil(marca, modelo, color, anio) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.anio = anio
}

let auto1 = new automovil("ford", "fiesta", "azul", 2018)
console.log(auto1)

let miMarca=prompt("Ingresa la marca de tu automovil")
let miModelo=prompt("Ingresa el modelo de tu automovil")
let miColor=prompt("Ingresa el color de tu automovil")
let miAnio=prompt("Ingresa el año de tu automovil")

let miAuto = new automovil(miMarca, miModelo, miColor, miAnio)
console.log(miAuto)

//Funcion literal con objeto literal como parametro y metodo
let gafa1 = {marco:"Plastico", aumento:0.25}
function Gafa(objliteral) {
    this.marco = objliteral.marco
    this.aumento = objliteral.aumento
    this.mostrarGafa = function() {console.log("Esta gafa tiene marco: " + this.marco)
        
    }
}

let miGafa = new Gafa(gafa1)
console.log(miGafa)
miGafa.mostrarGafa()

//Metodo de String - Se interpreta como un objeto
let texto = "Que tengas un hermoso dia"
console.log("longitud: "+texto.length) //Propiedad
let aMayuscula = texto.toUpperCase() //Metodo
console.log(aMayuscula)
let aMinuscula = texto.toLowerCase()
console.log(aMinuscula)

//In and For In //Recorrer propiedades
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
for (const propiedad in persona1) {
    console.log(propiedad);
}

//Clases | Constructor desde la opcoon *class
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre
        this.edad   = edad
        this.calle  = calle
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742")
console.log(persona1)

class Bicicleta{
    constructor(marca, color, condicion, precio) {
        this.marca = marca
        this.color   = color
        this.condicion  = condicion
        this.precio = precio
    }
    modificarPrecio(){
        let nuevoPrecio = parseFloat(prompt("Ingrese el precio actualizado."))
        this.precio = nuevoPrecio
    }
    mostrarBici(){
        console.log("La bici es " + this.marca)
    }
}
const bici = new Bicicleta("Optimus", "Naranja", "Nueva", 1000)
console.log(bici)
bici.modificarPrecio()
bici.mostrarBici()

//Clases y Metodos
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre
        this.edad   = edad
        this.calle  = calle
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre)
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742")
persona1.hablar()

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase()
        this.precio  = parseFloat(precio)
        this.vendido = false
    }
    sumaIva() {
        this.precio = this.precio * 1.21
    }
    vender() {
        this.vendido = true
    }
}
const producto1 = new Producto("arroz", "125")
const producto2 = new Producto("fideo", "50")
producto1.sumaIva()
producto2.sumaIva()
producto1.vender()



