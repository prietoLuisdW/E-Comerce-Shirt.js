//STORAGE
localStorage.setItem("nombre", prompt("Ingrese el nombre del usuario"));
console.log("El nombre en localStorage es: " + localStorage.getItem("nombre"));

localStorage.setItem("edad", 45);
let edadGuardada = localStorage.getItem("edad");
console.log(typeof edadGuardada);

sessionStorage.setItem("notas", [10, 8, 6, 4, 9]);
let notasGuardadas = sessionStorage.getItem("notas").split(","); //Divide un objeto de tipo string a un array en cadena.
console.log(notasGuardadas);
let notasFinal = notasGuardadas.map(nota => parseInt(nota)); //Convertir todas las notas en numero, ya que todo lo que se guarda en el local storage lo hace como string
console.log(notasFinal);

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

localStorage.clear(); //borra todo el localS
sessionStorage.removeItem("notas"); //borra solo ese item


//Ejercicio
//Solicitar al usuario su equipo de futbol favorito, guardarlo en el localStorage, 
//luego obtener el valor guardado y mostrarlo en pantalla.

const multiplicar = (a, b) => a * b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición calculamos el número ingresado por el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    guardarLocal(i, multiplicar(parseInt(ingresarNumero), i));
}

//guardando objetos en el storage
localStorage.setItem("unEmpleado", JSON.stringify({ legajo: 12341, nombre: "Jorge Arias", sueldo: 67000 }));
let jsonGuardado = localStorage.getItem("unEmpleado");
console.log("Json guardado: " + jsonGuardado);
let jsonAObjeto = JSON.parse(jsonGuardado);
console.log("Json convertido nuevamente a objeto: ");
console.log(jsonAObjeto);

localStorage.clear();
const empleados = [{ legajo: 12341, nombre: "Jorge Arias", sueldo: 67000 },
    { legajo: 78654, nombre: "Nicolás Gomez", sueldo: 55000 },
    { legajo: 87090, nombre: "Josefina Perez", sueldo: 67000 },
    { legajo: 12888, nombre: "Jorge Arias", sueldo: 120000 }
];

const guardarLocalSt = (clave, valor) => { localStorage.setItem(clave, valor) };

//Guardar objeto por objeto | Array | Clave por clave
for (const empleado of empleados) {
    guardarLocalSt(empleado.legajo, JSON.stringify(empleado));
}

//GUardar todos los objetos de una sola clave
guardarLocalSt("listaEmpleados", JSON.stringify(empleados));
const almacenados = JSON.parse(localStorage.getItem("listaEmpleados")); //lista de objetos literales


class Empleado {
    constructor(objLit) {
        this.legajo = objLit.legajo;
        this.nombre = objLit.nombre;
        this.sueldo = objLit.sueldo;
    }
    aumentarSueldo() {
        this.sueldo = this.sueldo * 1.15;
    }
}

const misEmpleados = [];
for (const literal of almacenados) {
    misEmpleados.push(new Empleado(literal));
}

for (const empleado of misEmpleados) {
    empleado.aumentarSueldo();
}

console.log(misEmpleados);