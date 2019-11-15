
function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1986, 9, 8)

let dias = diasEntreFechas(hoy, nacimiento)
console.log(dias)
console.log(dias / 365)