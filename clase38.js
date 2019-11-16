
/*
Factorial

!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
!12 = 12 * 11 * 10 * ... * 1 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

function factorial(n) {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(6))