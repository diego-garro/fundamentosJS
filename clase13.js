var diego = {
    nombre: 'Diego',
    apellido: 'Garro',
    edad: 33,
    peso: 75
}

console.log(`Al inicio del año ${diego.nombre} pesa ${diego.peso} Kg.`)

// function aumentarDePeso (persona) {
//     return persona.peso += 200    
// }

const VARIACION_DE_PESO = 0.200

const aumentarDePeso = persona => persona.peso += VARIACION_DE_PESO

const adelgazar = persona => persona.peso -= VARIACION_DE_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(diego)
    } else if (random < 0.5) {
        adelgazar(diego)
    }
}

console.log(`Al final del año ${diego.nombre} pesa ${diego.peso.toFixed(1)} Kg.`)