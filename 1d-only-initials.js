// **Challenge:** Write a function that takes an array of names 
// (always <firstname> <surname> format) and returns an array of initials for each person.

// function name -> onlyInitials
// parameter: 
// - array of strings called fullNames
// returns: array of strings

// pseudocode:
// ===========
// iterate through each name and split it into an array of 2 strings each
// assign an empty array called initials
// iterate through each array
//     add two charAt([0]) concatenated together into the initials array
// return initials

function onlyInitials(fullNames) {
    let splitNames = [];
    for (let name of fullNames) {
        splitNames.push(name.split(" "));
    }
    let initials = [];
    for (let splitName of splitNames) {
        for (let n=0; n<splitName.length; n+=2) {
            initials.push(`${splitName[n].charAt(0)}.${splitName[n+1].charAt(0)}`)
        }
    }
    return initials
}

// test
console.log(onlyInitials(["Ash Ketchum", 
"Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])

console.log(onlyInitials(["Katarzyna Dziewicka", 
"Thea Littlewood", "Aleksandra Kedzior", "Malgorzata Zielinska", "Lidia Dziewicka"]),
 ["K.D.", "T.L.", "A.K.", "M.Z.", "L.D."])