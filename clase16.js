var signo = prompt('Cuál es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Romperás viejas ataduras sentimentales y te proyectarás al futuro con seguridad.')
        break
    case 'tauro':
        console.log('Comienza para ti un período de amor y pasión.')
        break
    case 'geminis':
        console.log('Un lunes para explorar algo nuevo en tu intimidad.')
        break
    case 'cancer':
        console.log('Una noticia inesperada alegrará el día y toda la semana.')
        break
    default:
        console.log(`${signo} no es un signo del Zodiaco!`)
        break
}