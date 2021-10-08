function areYum(fruit) {
    return `${fruit} are yum`
}

function fruitsYum(fruitList) {
    return fruitList.map(areYum)
}



console.log(fruitsYum(["apples", "bananas", "carrots"]), 
["apples are yum", "banans are yum", "carrots are yum"])