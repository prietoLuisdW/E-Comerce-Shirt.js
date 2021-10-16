let nProductos = parseInt(prompt("Indique los cantidad de productos a cotizar"))
let iva = 0
const porIva = 0.19
let subtotal = 0
let totalVenta = 0
let cantidad = 0
let costoEnvio = 0
let producto
let descuento = 0

function prenda(referencia, tipo, sexo, talla, color, precio, descuento) {
    this.referencia = referencia
    this.tipo = tipo
    this.sexo = sexo
    this.talla = talla
    this.color = color
    this.precio = precio
    this.descuento = descuento
}

let vReferecia
let vTipo
let vSexo
let vTalla
let vColor
let vPrecio
let vDescuento
let consecutivo

console.log("Listado de Productos")

for (let i = 1; i <= nProductos; i++){
    console.log("Consecutivo: " + i)
    vReferecia = prompt("Referencia " + i)
    vTipo = prompt("Tipo? " + i)
    vSexo = prompt("Sexo? " + i)
    vTalla = prompt("Talla? " + i)
    vColor = prompt("Color? " + i)
    vPrecio = parseFloat(prompt("Ingres el precio del producto " + i))
    vDescuento = parseFloat(prompt("Descuento? " + i))
    subtotal = subtotal + vPrecio
    cantidad = cantidad + 1
    descuento = descuento + vDescuento
    let producto = new prenda (vReferecia, vTipo, vSexo, vTalla, vColor, vPrecio, vDescuento)
    console.log(producto)
}

function fCostoEnvio(ventaBase) {
    if (ventaBase > 100000) {
        costoEnvio = 0
    }else if(ventaBase >= 50000){
        costoEnvio = ventaBase * 0.1
    }else if(ventaBase > 25000){
        costoEnvio = ventaBase * 0.2
    }else if(ventaBase > 0){
        costoEnvio = 5000
    }else{
        costoEnvio = 0
    }
}

console.log("Subtotal: " + subtotal)
console.log("Descuento: " + descuento)

fCostoEnvio(subtotal)
console.log("Costo Envio: " + costoEnvio)

function fIva(base, porcentaje) {
    iva = base * porcentaje
}
function fTotalVenta(base, envio, iva, descuento) {
    totalVenta = base + envio + iva - descuento
}
//Totalizar Venta
fIva(subtotal, 0.19)
console.log("Iva: " + iva)

fTotalVenta(subtotal, costoEnvio, iva, descuento)
console.log("Total Venta: " + totalVenta)

function cliente(nombre, ciudadEnvio, direccionEnvio) {
    this.nombre = nombre
    this.ciudadEnvio = ciudadEnvio
    this.direccionEnvio = direccionEnvio
}
let nombreCliente
let ciudadEnvio
let direccionEnvio


if (totalVenta > 0){
    //Ingresar datos de envio
    alert("Numero de Productos: " + cantidad + "\nValor Venta Neta: " + subtotal + "\nCosto Envio: " + costoEnvio + "\nImpuesto Iva: " + iva + "\nTotal a Pagar: " + totalVenta )
    let confirmar = parseInt(prompt("Desea confirmar compra? Indique 1 para SI o 0 para NO"))
    if (confirmar == 1) {
        nombreCliente = prompt("Ingrese su nombre y apellido")
        ciudadEnvio = prompt("Ciudad de Envio")
        direccionEnvio = prompt("Ingrese la Direeción de envio")
    }

    //Primer validador de datos de envio | Ultima oportunidad de ingresar datos de envio | Sin datos de envio no se puede continuar con la compra
    if ((confirmar == 1) && ((nombreCliente == "") || (ciudadEnvio == "") || (direccionEnvio == ""))){
        alert("Error! Ingrese los datos de envio por favor")
        nombreCliente = prompt("Ingrese su nombre y apellido")
        ciudadEnvio = prompt("Ciudad de Envio")
        direccionEnvio = prompt("Ingrese la Direeción de envio")
    }

    let continua = 0
    //Proceso final - Si hay error en datos inrgesados. Se anulara el proceso.
    if ((confirmar == 1) && ((nombreCliente == "") || (ciudadEnvio == "") || (direccionEnvio == ""))){
        alert("Error! No se han ingresado los datos necesarios. \nProceso Anulado. \nInciel proceso nuevamente")
        continua = 0
    }else if ((confirmar == 1) && ((nombreCliente != "") || (ciudadEnvio != "") || (direccionEnvio != ""))){
        alert("Nombre del Cliente: " + nombreCliente + "\nCiudad de envio: " + ciudadEnvio + "\nDirección de Envio: " + direccionEnvio + "\nValor a Pagar: " + totalVenta)
        confirmar = parseInt(prompt("Indique Uno(1) para ir a pagar o cero (0) para finalizar"))
    }
    let clienteFinal = new cliente(nombreCliente, ciudadEnvio, direccionEnvio)
    console.log(clienteFinal)
}else{
    alert("No hay Productos para Pagar")
}