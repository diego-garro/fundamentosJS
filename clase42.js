
const diego = {
    nombre: 'Diego',
    apellido: 'Garro',
}

const antonio = {
    nombre: 'Antonio',
    apellido: 'Molina',
}

function saludar(saludo='Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//const saludarADiego = saludar.bind(diego)
//const saludarAAntonio = saludar.bind(antonio)

//saludarADiego()
//saludarAAntonio()

//setTimeout(saludar.bind(diego, 'Hola che'), 1000)

//saludar.call(diego, 'Hola che')

saludar.apply(diego, ['Hola che'])