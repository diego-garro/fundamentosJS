
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador!`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var diego = new Persona('Diego', 'Garro', 1.78)
var ericka = new Persona('Ericka', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martínez', 1.89)

diego.saludar()
ericka.saludar(responderSaludo)
arturo.saludar(responderSaludo)