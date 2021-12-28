const mongoose = require('mongoose')
const pokemonShema = require('../schema/pokemon')

const pokemon = mongoose.model('pokemon', pokemonShema,'pokemon')

class Pokemon {
     static async findAll(){
        return pokemon.find({})
    }
    
}

module.exports = Pokemon

