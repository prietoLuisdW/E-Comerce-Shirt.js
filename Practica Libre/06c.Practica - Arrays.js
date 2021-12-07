//Arrays - Listas

const listaDeCompras = ["1 Kg Pan", "3 Gaseosas", "3 Kg Asado", "1 Kg Chorizo", "Lechuga", "Carbon"]

for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(listaDeCompras[i])
}

console.log(listaDeCompras.length)

let listaACadena = listaDeCompras.toString()
console.log(listaACadena)

listaDeCompras.push("Postre")
console.log(listaDeCompras)

console.log(listaDeCompras.join(" | "))

const elementosOlvidados = ["Vino", "Sal"]
const listaCompleta = listaDeCompras.concat(elementosOlvidados)





//Arrays de Objetos
let listaAlumnos = [{ nombre: "Pedro Gomez", nota: 8 },
    { nombre: "Luciana Martinez", nota: 10 },
    { nombre: "Alberto Gomez", nota: 5 },
    { nombre: "Pepe Man", nota: 10 }
]

//Recorro la lista
let acumulado = 0
for (let alumno of listaAlumnos) {
    console.log("Nombre: " + alumno.nombre + "\nNota Obtenida: " + alumno.nota)
    acumulado = acumulado + alumno.nota
}
let promedio = acumulado / listaAlumnos.length
console.log("Promedio de Notas: " + promedio)

//Typeof indica el tipo de tdato


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.vendido = false
    }
    sumaIva() {
        this.precio = this.precio * 1.21
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = []
productos.push(new Producto("arroz", "125"))
productos.push(new Producto("fideo", "70"))
productos.push(new Producto("pan", "50"))
console.log(productos)

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva()

console.log(productos)
    //Tarea - Incluir el Iva en el array


///Metodo Find
const numeros = [1, 2, 3, 4, 5]
    //La función parámetro generalmente es una función flecha sin cuerpo.
const encontrado = numeros.find(elemento => elemento > 3) //Encuentra 4
console.log(encontrado)

const nombres = ["Ana", "Ema", "Juan"]
const encontrado2 = nombres.find(elemento => elemento === "Ema") //Encuentra "Ema"
console.log(encontrado2)
const encontrado3 = nombres.find(elemento => elemento === "Alan") //undefined
console.log(encontrado3)


///Metodo Filter
const numeross = [1, 2, 3, 4, 5];
const filtro1 = numeross.filter(elemento => elemento > 3) //Encuentra [4,5]
console.log(filtro1)
const filtro2 = numeross.filter(elemento => elemento < 4) //Encuentra [1,2,3]
console.log(filtro2)

const nombress = ["Ana", "Ema", "Juan", "Elia"]
    //Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro3 = nombress.filter(elemento => elemento.includes("n"))
console.log(filtro3)


///Metodo Map | Mpdificando los elementos
const numeros = [1, 2, 3, 4, 5]
const porDos = numeros.map(x => x * 2) // porDos = [2, 4, 6, 8, 10]
const masCien = numeros.map(x => x + 100) // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"]
const lengths = nombres.map(nombre => nombre.length) //lengths = [3, 3, 4, 4]

//Ejemplo aplicado
const productos = [{ id: 1, producto: "Arroz", precio: 125 },
    { id: 2, producto: "Fideo", precio: 70 },
    { id: 3, producto: "Pan", precio: 50 },
    { id: 4, producto: "Flan", precio: 100 }
]

const buscarPan = productos.find(producto => producto.id === 3)
console.log(buscarPan) //{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos) //
    [{ id: 2, producto: "Fideo", precio: 70 }, { id: 3, producto: "Pan", precio: 50 }]

const aumentos = productos.map(producto => producto.precio += 30)
console.log(aumentos)
    //[155, 100, 80, 130] y el valor de cada producto cambio.