
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

function imprimirNombreEnMAyusculas(persona) {
	// var bombre = persona.nombre
	var { nombre } = persona
	console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
	// Hola, soy Diego y tengo 30 años
	var { nombre } = persona
	var { edad } = persona
	console.log(`Hola, soy ${nombre} y tengo ${edad} años.`)
}

imprimirNombreEnMAyusculas(diego)
imprimirNombreEnMAyusculas(dario)
//imprimirNombreEnMAyusculas({nombre: 'Pepito'})
//imprimirNombreEnMAyusculas()
imprimirNombreYEdad(diego)
imprimirNombreYEdad(dario)

function cumpleanos(persona) {
	return {
		...persona,
		edad: persona.edad + 1
	}
	}