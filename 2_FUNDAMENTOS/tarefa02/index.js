const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual é o seu nome completo?'
},
{
    name: 'p2',
    message: 'Qual é a sua idade?'
},
])
.then((answers) => {
    nome = answers.p1
    idade = answers.p2
    if(idade < 18) {
        console.log(chalk.bgRed.black("Infelizmente você ainda é novo para dirigir"))
        
    }else{
        console.log(chalk.bgGreen.black("Parabens você ja pode dirigir!!"))
    }
})
.catch((err) => console.log(err))