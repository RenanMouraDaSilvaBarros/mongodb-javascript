require('dotenv').config({ path: '.env' })

const MongoDB = require('./database/mongoDB')

const express = require('express')
const routers = require('./routers')
const app = express()

async function middleware(){
    await MongoDB.createConnection()
    app.use(express.json())
    app.use(routers)
}

middleware()

app.listen(3000, ()=>{
    console.log(`server running`)
})

