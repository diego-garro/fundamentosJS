
const diego = {
    nombre: 'Diego',
    apellido: 'Garro',
    edad: 33
}

//const cumpleanos = persona => persona.edad++

//cumpleanos(diego)
//console.log(diego.edad)

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

const nuevo = cumpleanosInmutable(diego)
console.log(nuevo.edad)
console.log(diego.edad)