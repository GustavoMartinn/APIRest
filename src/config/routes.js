const express = require('express')
const routes = express.Router()
const fetch = require("node-fetch");

routes.get('/', (req, res) => {
    return res.json('API criada por Gustavo Martin')
})

routes.get('/hello', (req, res) => {
    return res.json('World')
})

routes.get('/starwars/films', (req, res) => {
    films = []
    fetch('https://swapi.dev/api/films')
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                }
                else {
                    data.results.forEach(element => {
                        films.push(element.title)
                    })
                    return res.json(films)
                }
            })
})

routes.post('/soma', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    return res.json(body.num1 + body.num2)
})

module.exports = routes