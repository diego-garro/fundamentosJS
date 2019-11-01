var diego = {
    nombre: 'Diego',
    edad: 33,
    drone: false,
    guitarrista: false,
    programador: true
}

var juan = {
    nombre: 'Juan',
    edad: 17,
    drone: false,
    guitarrista: true,
    programador: false
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO!')
    }
}