function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var diego = new Persona('Diego', 'Garro')
var ericka = new Persona('Ericka', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')

diego.saludar()
ericka.saludar()
arturo.saludar()