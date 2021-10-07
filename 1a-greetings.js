// // **Challenge:** Write a function that takes an array of names, 
// and returns an array with a greeting for each of those names: "Hello, <name>!".

// function name -> greetings
// parameter:
//  - NAMES
//  returns: array of strings

// pseudocode:
// ===========
// assign empty array called greetList
// iterate through each name in NAMES
//     add `Hello, ${name}` to greetList
// return greetList

function greetings(names) {
    let greetList = [];
    for (let name of names) {
        greetList.push(`Hello, ${name}`)
    }
    return greetList
}

// test:
console.log(greetings(["Ash", "Beth", "Ciara"]), ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"])

