"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
// import {somar , subtrair} from "./math"
const validator_1 = __importDefault(require("validator"));
let n1 = 10;
let n2 = 2;
let ip = "127.0.190.1";
console.log(`Soma: ${math_1.default.somar(n1, n2)}`);
console.log(`Subtração: ${math_1.default.subtrair(n1, n2)}`);
console.log(`Multiplicação: ${math_1.default.multiplicar(n1, n2)}`);
console.log(validator_1.default.isIP(ip));
