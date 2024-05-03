// Functions
function areaQuadrado(lado) {
  return lado * lado;
}

const result = areaQuadrado(5);
console.log(`A área de um quadrado cujo valor é 5 é: ${result}`);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto de azul';
  } else if (cor === 'verde') {
    return 'Eu gostod de verde';
  } else {
    return 'Eu não gosto de cores';
  }
}

console.log(corFavorita());

addEventListener('click', () => {
  console.log('Oi');
});

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Valor apresentado não é numérico';
  } else if (idade >= 60) {
    return 'Está na terceira idade';
  } else {
    return 'Não está na terceira idade';
  }
}

function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

// ======== Exercícios ========
// 1. Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}
console.log(isTruthy(9));

// 2. Crie uma função matemática que retorne o perímetro de
// um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado
function calculatePerimeter(side1, side2, side3, side4) {
  return side1 + side2 + side3 + side4;
}

// 2. Crie uma função que retorne o seu nome completo.
// Ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, lastName) {
  return `Nome completo: ${name} ${lastName}`;
}

// 3. Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2 === 0) {
    return 'O número é par';
  } else {
    return 'O número é ímpar';
  }
}

// 4. Crie uma função que retorna o tipo do dado do argumento passado
function typeData(data) {
  return `Tipo de dado: ${typeof data}`;
}

// 5. addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log(fullName('Igor', 'Santana'));
});


