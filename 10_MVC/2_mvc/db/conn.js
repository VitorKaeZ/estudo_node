const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao banco!')

} catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize