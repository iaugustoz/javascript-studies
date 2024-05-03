// Booleans
const hasCollege = true;
const hasDoctorate1 = false;

// Conditionals (if, else if and else)
if (hasDoctorate1) {
  console.log('Possui graduação e doutorado');
} else if (hasCollege) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação e nem doutorado');
}

// Truthy and Falsy Values
const string = '';

if (string) {
  console.log('A string contém caractere, logo foi interpretada como Truthy');
} else {
  console.log(
    'A string não possui caractere, logo foi interpretada como Falsy'
  );
}

/*
  ======= Comparison Operators =======
  >: maior que
  <: menor que
  <= menor ou igual
  >= maior ou igual
  ==: igual
  ===: igual restrito
  !=: diferente
  !==: diferente restrito
*/
10 > 5; // true
10 > 10; // false
10 <= 10; // true
4 == 4; // true
2 != 2; // false
'10' === 10; // false (os valores são iguais, porém o tipo é diferente. Logo, não são iguais)
10 !== 10; // false
console.log('10' === 10);

/* 
  ======= Logical Operators =======
  && (and): todas as condições devem ser verdadeiras para retornar true
  || (or): uma das condições deve ser verdadeira para retornar true
*/
true && true; // true
true && false; // false
false && true; // false

// Switch
const favoriteColor = 'azul';

switch (favoriteColor) {
  case 'azul':
    console.log('Esta é minha cor favorita!');
    break;
  default:
    console.log('Esta não é minha cor favorita');
}

// ======== Exercícios ========
// 1. Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado
// coloque no console 'É maior', 'É igual' ou 'É menor'
const myAge = 20;
const relative = 35;

if (myAge > relative) {
  console.log('É maior');
} else if (myAge === relative) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// 2. Qual é o valor retornado na seguinte expressão?
const expression = 5 - 2 && 5 - ' ' && 5 - 2;
console.log(`Retorna 3. Resultado: ${expression}`);

// 3. Verifique se as seguintes variáveis são Truthy ou Falsy
const name = 'Igor'; // Truthy
const age = 20; // Truthy
const hasDoctorate = false; // Falsy
let futureEmployment; // Falsy
const moneyAccount = 0; // Falsy

// 4. Compare o total de habitantes do Brasil com China (valor em milhões)
const brazil = 210;
const china = 1340;

if (brazil === china) {
  console.log('Possuem a mesma quantidade de habitantes');
} else {
  console.log('A quantidade de habitantes é difente');
}

// 5. O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
