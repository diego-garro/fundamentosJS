function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var diego = new Persona('Diego', 'Garro', 1.78)
var ericka = new Persona('Ericka', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.82)

diego.saludar()
ericka.saludar()
arturo.saludar()