// **Challenge:** Write a function that takes an array of numbers, 
// and returns an array with the same numbers, but signs flipped.

// function name -> invertNumbers
// parameter:
//  - array of numbers numList 
// returns: array of numbers

// pseudocode:
// ============
// assign an empty array called invertedList
// iterate through numbers in numList
//     add each number multiplied by -1 to the invertedList
// return invertedList

function invertNumbers(numList) {
    let invertedList = []
    for (number of numList) {
        invertedList.push(number*-1);
    }
    return invertedList;
}

// test:
console.log(invertNumbers([1, -3, 2, 8, -10]), [-1, 3, -2, -8, 10])