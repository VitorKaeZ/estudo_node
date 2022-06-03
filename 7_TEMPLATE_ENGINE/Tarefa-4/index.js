const express = require('express')
const exphbs = require('express-handlebars')

const app = express()



app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
    {
        id: "1",
        title: "Arroz",
        price: 12.99
    },
    {
        id: "2",
        title: "Feijão",
        price: 15.99
    },
    {
        id: "3",
        title: "Macarrão",
        price: 10.99
    },
]
app.get('/', (req, res) => {


    res.render('home', { produtos })
})
app.get('/produtos/:id', (req, res) => {
    const produto = produtos[parseInt(req.params.id) -1]

    res.render('product', { produto })
})

app.listen(3000, () => {
    console.log('App funcionando')
})