const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variavel ambiente
const users = require('./users')


//ler body

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// arquivos estaticos

app.use(express.static('public'))

//Routes
const basePath = path.join(__dirname,  'templates')


app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

//404
app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

//listen port
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})


