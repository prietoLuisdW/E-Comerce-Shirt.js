let nProductos = parseInt(prompt("Indique los cantidad de productos a cotizar"))
let iva = 0
const porIva = 0.19
let precio = 0
let subtotal = 0
let totalVenta = 0
let cantidad = 0
let costoEnvio


for (let i = 1; i <= nProductos; i++){
    precio = parseFloat(prompt("Ingres el precio del producto " + i))
    subtotal = subtotal + precio
    cantidad = cantidad + 1
}

//Costo del envio
if (subtotal > 100000) {
    costoEnvio = 0
}else if(subtotal >= 50000){
    costoEnvio = subtotal * 0.1
}else if(subtotal > 25000){
    costoEnvio = subtotal * 0.2
}else if(subtotal > 0){
    costoEnvio = 5000
}else{
    costoEnvio = 0
}

//Totalizar Venta
iva = ( subtotal + costoEnvio ) * porIva
totalVenta = subtotal + costoEnvio + iva

console.log("Subtotal: " + subtotal)
console.log("Costo Envio: " + costoEnvio)
console.log("Impuesto Iva: " + iva)
console.log("Tota a Pagar: " + totalVenta)

let compraEfectiva = (totalVenta > 0 )
console.log(compraEfectiva)

switch(compraEfectiva){
    case true :
        let nombreCliente
        let ciudadEnvio
        let direccionEnvio
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
    default :
        break
}    
