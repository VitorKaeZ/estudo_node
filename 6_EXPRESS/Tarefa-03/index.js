const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const site = require('./site')

const basePath = path.join(__dirname,  '../Tarefa-03/templates')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.use(site)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})