const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variavel ambiente

const basePath = path.join(__dirname,  'templates')

//Middleware
const checkAuth = function(req, res, next) {

    req.authStatus = false

    if(req.authStatus) {
        console.log('Está logado , pode continuar')
        next()
    } else {
        console.log("Não está logado, faça login")
        next()
    }
}

app.use(checkAuth)

//Routes
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

//listen port
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})