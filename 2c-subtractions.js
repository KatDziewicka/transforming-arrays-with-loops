// Description: function that takes an array of objects and subtracts "subtract" from "n" in each.

function doSubtraction(nSubtrObj) {
    const result = nSubtrObj.n - nSubtrObj.subtract;
    return result ;
}

console.log(doSubtraction({n:10, subtract:1}))

function subtractions(objList) {
    return subList = objList.map(doSubtraction) ;
}

console.log(subtractions([{ n: 10, subtract: 1 }, { n: 10, subtract: 2 }, 
    { n: 100, subtract: 99 }]), [9, 8, 1])
