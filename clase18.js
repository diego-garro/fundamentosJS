var diego = {
    nombre: 'Diego',
    apellido: 'Garro',
    altura: 1.78
}

var allan = {
    nombre: 'Allan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.81
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = persona => persona.altura > 1.8

var personas = [diego, allan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

console.log(personasAltas)