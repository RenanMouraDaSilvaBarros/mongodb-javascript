require('dotenv').config({ path: '.env' })

const MongoDB = require('./database/mongoDB')
const Pokemon = require('./model/pokemon')

const express = require('express')
const app = express()

async function main(){
    await MongoDB.createConnection()
    const pokemon = await Pokemon.findAll()
    console.log(pokemon)
}

main()

app.listen(3000, ()=>{
    console.log(`server running`)
})

