// Write a function that takes an array of strings representing domain names, 
// in mixed case, and returns an array of the domain names in all-lowercase.

// function name: lowerCaseDomains

// parameter:
//  - domainNames - array of strings 

// returns: array of strings

// pseudocode:
// ===========
// assign allLowerCase as an empty array 

// iterate through each element of domainNames
//     element.toLowerCase() - > add it to allLowerCase

// return allLowerCase

function lowerCaseDomains(domainNames) {
    let allLowerCase = [];

    for (let domain of domainNames) {
        allLowerCase.push(domain.toLowerCase());
    }

    return allLowerCase
}

// test cases

console.log(
	lowerCaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"])

console.log(
	lowerCaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"])