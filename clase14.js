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

const VARIACION_DE_PESO = 0.300
const DIAS_DEL_ANNO = 365

const aumentarDePeso = persona => persona.peso += VARIACION_DE_PESO

const adelgazar = persona => persona.peso -= VARIACION_DE_PESO

const comeMucho = () => Math.random() < 0.3

const realizaDeporte = () => Math.random() < 0.4

const META = diego.peso - 3

var dias = 0

while (diego.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(diego)
    }
    if (realizaDeporte()) {
        adelgazar(diego)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${diego.nombre} adelgazó 3 Kg.`)