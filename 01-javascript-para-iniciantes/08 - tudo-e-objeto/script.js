// Everything is an object
let firstName = 'Igor';

firstName.charAt(1); // 'g'
changedName = firstName.replace('or', 'ão'); // Igão

console.log(`Com as alterações, temos: ${changedName}`);

console.log(`Letras minúsculas: ${firstName.toLowerCase}`);
console.log(`Letras maiúsculas: ${firstName.toUpperCase}`);

// ======== Exercícios ========
// 1. Utilize três propriedades ou métodos nativos de strings.
const lastName = 'Santana';
upperCase = lastName.toUpperCase();
lowerCase = lastName.toLowerCase();
concatLastName = lastName.concat('.');

console.log(
  `Com as devidas mudanças, temos:\n${concatLastName}\n${upperCase}\n${lowerCase}`
);

// 2. Utilize cinco propriedades ou métodos do DOM
const element = document.getElementById('#click');
addEventListener();
appendChild();
id;
outerHTML;
innerHTML;
