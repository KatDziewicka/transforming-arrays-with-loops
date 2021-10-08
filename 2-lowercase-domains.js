// Write a function that takes an array of strings representing domain names, 
// in mixed case, and returns an array of the domain names in all-lowercase.

// function name: lowerCaseDomains

// parameter:
//  - domainNames - array of strings 

// returns: array of strings

function lowerCaseTransform(element) {
    return element.toLowerCase();
}

function lowerCaseDomains(domainNames) {
    let allLowerCase = domainNames.map(lowerCaseTransform);
    return allLowerCase;
}

// test cases

console.log(
	lowerCaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"])

console.log(
	lowerCaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"])