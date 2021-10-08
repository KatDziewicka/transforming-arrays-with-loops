// **Challenge:** Write a function that takes an array of numbers and returns 
// an array of plain objects, with properties:

// - `asNumber` - the original number
// - `asString` - a string representation of the number

// function name -> numberAndString
// parameter:
// - array of numbers called numList 
// returns: array of objects 

// pseudocode:
// ==========
// assign an array called objectsList
// iterate through the numList
//     for each, add an object to objectsList containing asNumber: $number and asString "$number"
// return objectsList

function numberAndString (numList) {
    let objectsList = [];
    for (let number of numList) {
        objectsList.push({"asNumber": number, "asString": `${number}`})
    }
    return objectsList
}


// test:
console.log(numberAndString([4, -3.2]), [{ asNumber: 4, asString: '4' }, 
{ asNumber: -3.2, asString: '-3.2' }])
