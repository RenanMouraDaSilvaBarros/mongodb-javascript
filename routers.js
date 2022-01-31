const routers = require('express').Router()
const PokemonController = require('./controllers/pokemon-controller')
const Pokemon = require('./model/pokemon')

routers.get('/status',(request, response)=>{
    response.json('success')
})

routers.get('/pokemons/all',async (request, response)=>{
   const allPokemons = await PokemonController.findAll()
   response.json(allPokemons)
})

routers.get('/pokemons/by-name', async (request, response)=>{
    const {name} = request.query
    const pokemons = await Pokemon.findByName(name)
    return response.json(pokemons)
})

module.exports = routers