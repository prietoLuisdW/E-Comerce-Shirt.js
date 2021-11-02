








//After Viernes 29 de Octubre
const boton = document.createElement("button")
boton.textContent = "Explotar Nucleo!!"
boton.setAttribute("class", "btn btn-danger")
boton.setAttribute("id", "btnNucleo")
document.body.appendChild(boton)

const salida = document.createElement("h2")

boton.onclick = () => {
    salida.textContent = "Hiciste explotar el nucleo!!"
    document.body.appendChild(salida)
}

const asignaturas = []

const selector = document.createElement("select")
for (asignatura of asignaturas){
    let index = asignaturas.indexOf(asignatura)
    let acumulador = `<option> $ {asignatura}</option>`
    selector.innerHTML = acumulador
}