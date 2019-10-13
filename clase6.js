
var diego = {
	nombre: 'Diego',
	apellido: 'Garro',
	edad: 33
}

var dario = {
	nombre: 'Darío',
	apellido: 'Molina',
	edad: 30
}

function imprimirNombreEnMAyusculas({nombre}) {
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMAyusculas(diego)
imprimirNombreEnMAyusculas(dario)
imprimirNombreEnMAyusculas({nombre: 'Pepito'})
imprimirNombreEnMAyusculas()

