
/*
La división entera de 13 / 4 es 3
13 /_4___
13 - 4 = 9  1
9 - 4 = 5   1
5 - 4 = 1   1
1 - 4 ? -3  0
*/

function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(33, 3))