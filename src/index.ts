import Matematica from "./math"
// import {somar , subtrair} from "./math"
import validator from 'validator'


let n1:number = 10
let n2:number = 2
let ip = "127.0.190.1"

console.log(`Soma: ${Matematica.somar(n1,n2)}`)
console.log(`Subtração: ${Matematica.subtrair(n1,n2)}`)
console.log(`Multiplicação: ${Matematica.multiplicar(n1,n2)}`)

console.log(validator.isIP(ip))