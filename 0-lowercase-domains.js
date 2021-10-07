// Write a function that takes an array of strings representing domain names, 
// in mixed case, and returns an array of the domain names in all-lowercase.

// function name: lowerCaseDomains

// parameter:
//  - domainNames - array of strings 

// returns: array of strings

// pseudocode:
// ===========
// assign allLowerCase as an empty array 
// assign lowerCaseDom as an empty string

// iterate through each element of domainNames
//     reassign element.toLowerCase() to lowerCaseDom
//     ass lowerCaseDom to the end of allLowerCase

// return allLowerCase

// test cases

// console.log(
// 	lowerCaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
// 	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
// )

// console.log(
// 	lowerCaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
// 	["m1a.tech", "example.co.uk", "https://javascript.info"]