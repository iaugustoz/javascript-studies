// Element Selection

// ======== Exercícios ========
// 1. Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// 2. Retorne no console apenas as imagens que começaram com a palavra imagem
const images = document.querySelectorAll('img[src^="imagem"]');
console.log(`Imagens: ${images}`);

// 3. Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(`Links internos: ${linksInternos}`);

// 4. Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// 5. Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(`Último p ${ultimoP[ultimoP - 1]}`);
