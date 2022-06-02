const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variavel ambiente

const basePath = path.join(__dirname,  'templates')

//ler body

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//Routes

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e a idade dele é de ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

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


