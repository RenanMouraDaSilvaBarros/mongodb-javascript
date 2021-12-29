const routers = require('express').Router()
const PokemonController = require('./controllers/pokemon-controller')

routers.get('/status',(request, response)=>{
    response.json('success')
})

routers.get('/pokemons/all',async (request, response)=>{
   const allPokemons = await PokemonController.findAll()
   response.json(allPokemons)
})

module.exports = routers