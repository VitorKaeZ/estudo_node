const x = 10
const y = "Vitor"
const z = [1,2]


console.log(x,y,z)

//contagem de impressoes

console.count(`O Valor de x é: ${x}, contagem`)
console.count(`O Valor de x é: ${x}, contagem`)
console.count(`O Valor de x é: ${x}, contagem`)
console.count(`O Valor de x é: ${x}, contagem`) // Simulando loop


// variavel entre string

console.log("O nome é %s, ele é programador", y)

//limpar o console

setTimeout(() => {
    console.clear()
},2000)