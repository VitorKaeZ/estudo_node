const express = require('express')
const exphbs = require('express-handlebars')
const conn =  require('./db/conn')

const User = require('./models/User')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})



//LISTEN PORT

conn.sync().then(() => {
        app.listen(3000, console.log("Conectado no servidor!!"))
    })
    .catch((err) => console.log(err))


