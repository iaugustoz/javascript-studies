const title = document.querySelector('h1');

title.innerText; // retorna o texto;
title.classList; // retorna as classes;
title.id; // retorna o id;
title.offsetHeight; // retorna a altura do elemento;

function callbackTitle() {
  alert('Alerta ativo');
}

title.addEventListener('click', callbackTitle);

// ======== Exercícios ========
// 1. Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(`href da página: ${href}`);

// 2. Selecione o primeiro elemento da página que possua a classe "active"
const activeElement = document.querySelector('.active');
console.log(`1º Elemento com a classe active: ${activeElement}`);

// 3. Retorne a linguagem do navegador
const language = navigator.language;
console.log(`Idioma do navegador: ${language}`);

// 4. Retorne a largura da janela
const width = window.innerWidth;
console.log(`Largura da janela: ${width}`);
