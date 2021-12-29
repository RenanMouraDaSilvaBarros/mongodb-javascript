const routers = require('express').Router()

routers.get('/status',(request, response)=>{
    response.json('success')
})

module.exports = routers