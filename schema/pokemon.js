const mongoose = require("mongoose")
const { Schema } = mongoose

const pokemonShema = new Schema({
        types: { type: Array },
        name: { type: String },
        legendary: { type: Boolean },
        hp: { type: Number },
        attack: { type: Number },
        defense: { type: Number },
        speed: { type: Number },
        generation: { type: Number }
})

module.exports = pokemonShema

