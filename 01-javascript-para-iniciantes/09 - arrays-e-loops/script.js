// Array
const videoGames = [
  'Console Nintendo Switch',
  'PlayStation 5',
  'Xbox Series X',
];

videoGames[0]; // Switch
videoGames[2]; // Xbox Series X

// length Property
console.log(`Tamanho de elementos no Array: ${videoGames.length}`);

// Other methods for Manipulating array elements
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('Nintendo 3DS'); // Adiciona ao final do Array

/*
  ======= Loop For =======
    - Usado quando se sabe o número de iterações; 
    - O for loop possui 3 partes: início, condição e incrementado.
*/

console.log(`\n======= Loop For =======`);
// Print of Array Elements
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

console.log(`\n======= Loop While =======`);
/*
  ======= Loop While =======
    - Usado quando não se sabe o número de iterações. 
*/
let i = 0;
while (i < videoGames.length) {
  console.log(videoGames[i]);
  i++;
}

console.log(`\n======= Loop forEach =======`);
/*
  ======= Loop forEach =======
    - Loop mais apropriado para trabalhar com Arrays
*/
const fruits = ['Banana', 'Maça', 'Pêra', 'Uva', 'Melância'];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// ======== Exercícios ========
// 1. Crie um Array com os anos que o Brasil ganhou a copa (1959, 1962, 1970, 1994, 2002)
const wins = [1959, 1962, 1970, 1994, 2002];

// 2. Interaja com o Array utilizando um loop, para mostrar no console a seguinte mensagem: 'O Brasil ganhou a copa de ${wins}'
console.log('\n');
wins.forEach((year) => {
  console.log(`O Brasil ganhou a copa de ${year}`);
});

// 3. Interaja com um loop nas frutas e abaixo e pare ao chegar em Pêra
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == 'Pêra') {
    break;
  }
  console.log(fruits[i]);
}

// 4. Coloque a última fruta do Array acima em uma variável
const lastFruit = fruits.pop();
console.log(`\nÚltima fruta: ${lastFruit}`);
