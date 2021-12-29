const pokemon = require('../model/pokemon')

class PokemonController{
    static async findAll(){
         const pokemons =  await pokemon.findAll()
         return pokemons
    }
}

module.exports = PokemonController