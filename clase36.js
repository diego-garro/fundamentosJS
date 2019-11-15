
var diego = {
    nombre: 'Diego',
    apellido: 'Garro',
    edad: 33
}

function esMayorDeEdad(persona) {
    var mensaje
    if (persona.edad > 18) {
        mensaje = 'Es mayor de edad.'
    } else {
        mensaje = 'Es menor de edad.'
        var mensaje2 = 'Este es otro mensaje'
    }

    console.log(mensaje)
    console.log(mensaje2)
}

esMayorDeEdad(diego)