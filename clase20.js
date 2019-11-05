var diego = {
    nombre: 'Diego',
    apellido: 'Garro',
    altura: 1.78,
    cantidadDeLibros: 52
}

var allan = {
    nombre: 'Allan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 35
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.81,
    cantidadDeLibros: 62
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 33
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 44
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 79
}

const esAlta = persona => persona.altura > 1.8

var personas = [diego, allan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    })

var personasCms = personas.map(pasarAlturaACms)

//var acum = 0

//for (var i = 0; i < personas.length; i++) {
//    acum = acum + personas[i].cantidadDeLibros
//}

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totalDeLibros} libros`)