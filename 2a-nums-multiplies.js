function multiply(number) {
    return number*2
}

function numsMultiplies(numList) {
    return numList.map(multiply)
}


console.log(numsMultiplies([1, 2, 3]), [2, 4, 6])