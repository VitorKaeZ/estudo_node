const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

//insert data
app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pagesqty = req.body.pagesqty

    const query = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

    conn.query(query, function (err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/')
    })

})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    conn.query(sql, function (err, data) {
        if(err) {
            console.log(err)
            return
        }

        const books =  data

        console.log(books)

        res.render('books', { books })
    })

})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log('Conectado no MySQL!!')

    app.listen(3000)
})
