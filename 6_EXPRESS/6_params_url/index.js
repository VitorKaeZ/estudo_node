const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variavel ambiente

const basePath = path.join(__dirname,  'templates')


//Routes
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura tabela users, para resgatar usuario no banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)

})
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

//listen port
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})