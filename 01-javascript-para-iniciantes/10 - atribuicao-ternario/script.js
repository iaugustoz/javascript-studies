// Ternary Operator
const age = 19;
const canDrink = age >= 18 ? 'Pode beber' : 'Não pode beber';
console.log(canDrink); // Pode beber

// ======== Exercícios ========
// 1. Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// 2. Atribua 'Crédito Liberado' para a variável darCredito, caso o cliente possua carro e casa. E 'Crédito Negado' caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito =
  possuiCarro && possuiCasa ? 'Crédito Liberado' : 'Crédito Negado';
console.log(`Dar Crédito? ${darCredito}`);
