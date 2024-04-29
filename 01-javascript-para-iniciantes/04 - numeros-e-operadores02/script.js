/*
  ======== Operadores Binários ========
  
  A ordem importa!
  Começa por multiplicação e divisão, depois por soma e subtração

  Obs: Parênteses prioriza uma expressão (igual na matemática)
*/

// Exemplos:
const total1 = 20 + 5 * 2; // 30
const total2 = (20 + 5) * 2; // 50
const total3 = (20 / 2) * 5; // 50
const total4 = 10 + 10 * 2 + 20; // 40

/* 
  ======== Operadores Unários ========

  Incrementam e decrementam um valor.
*/
// Incremento:
let increm = 5;
console.log(`Incremento: ${++increm}`);

// Decremento
let decrem = 4;
console.log(`Decremento: ${--decrem}`);

// ======== Exercícios ========
// 1. Qual o resultado da seguinte expressão?
const total = 10 + (5 * 2) / 2 + 20; // 35

// 2. Crie duas expressões que retornem NaN
const expression1 = 'Isso resulta em NaN' + 2;
const expression2 = undefined + 3;
console.log(`É um NaN? ${isNaN(expression1)}\nÉ um NaN ${isNaN(expression2)}`);

// 3. Somar a string '200' com a string '50' e retornar 250
const soma = +'200' + +'50';
console.log(`Resultado: ${soma}`);

// 4. Incremente o número 5 e retorne o seu valor incrementado
let number = 5;
console.log(`Incremento: ${++number}`);

// 5. Como dividir o peso por 2?
const numero = +'80' / 2;
const unidade = 'kg';
const peso = +number + unidade;
const pesoPorDois = peso;

console.log(`Peso por dois: ${pesoPorDois}`);
