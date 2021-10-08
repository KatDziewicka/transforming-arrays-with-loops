// // **Challenge:** Write a function that takes an array of objects representing Pokémon, 
// with string properties `name` and `type`, and returns a descriptive sentence about them 
// and their type: `"<name> is a <type in lowercase> type Pokémon."`.

// function name -> pokemonTypes
// parameter:
// - pokeList, an array of objects 
// returns: array of strings 

// pseudocode:
// ===========
// assign an empty array called pokeDescripts
// iterate through pokeList
//     add description bit with reference to the objects
// return pokeDescripts

function pokemonTypes(pokeList) {
    let pokeDescripts = [];
    for (let pokemon of pokeList) {
        pokeDescripts.push(`${pokemon.name} is a ${pokemon.type.toLowerCase()} type Pokémon.`)
    }
    return pokeDescripts
}

// test:
console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, 
{ name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),
["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.",
"Squirtle is a water type Pokémon."])
