// // **Challenge:** Write a function that takes an array of strings, 
// and returns an array with the number of characters in each string.

// function name -> countStrings
// parameter:
//  - strList, array of strings 
// returns: array of numbers

// pseudocode:
// =========
// assign an empty array called numsOfChar
// iterate through each string in strList
//     add the length of each string to numsOfChar 
// return numsOfChar 

function countStrings(strList) {
    let numsOfChar = [];
    for (let string of strList) {
        numsOfChar.push(string.length);
    }
    return numsOfChar
}

// test:
console.log(countStrings(["one", "two", "three", "four"]), [3, 3, 5, 4])

