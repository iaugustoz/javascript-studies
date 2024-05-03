// Objects
const people = {
  name: 'Igor',
  age: 20,
  occupation: 'Software Engineer',
  favoriteSport: 'Soccer',
  favoriteBand: 'Queen',
};

const square = {
  sides: 4,
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * this.sides;
  },
};

console.log(square.area(5));
console.log(square.perimeter(5));

const menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
};

const bg = menu.backgroundColor;
menu.backgroundColor = '#000';
menu.color = '#24f'; // Adiciona um atributo novo (atributo color)

// ======== Exercícios ========
// 1. Crie um objeto com os seus dados pessoais
const data = {
  firstName: 'Igor',
  lastName: 'Santana',
  age: 20,
  height: 1.8,
};

// 2. Crie um método no objeto anterior que mostre
// o seu nome completo.
data.fullName = function () {
  return `Nome completo: ${this.firstName} ${this.lastName}`;
};

// 3. Modifique o valor da propriedade price para 3000
const car = {
  price: 1000,
  door: 4,
  brand: 'Ferrari',
};

car.price = 3000;

// 4. Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem.
const dog = {
  race: 'Labrador',
  color: '#fff',
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Au Au Au!';
    } else {
      return 'Nada';
    }
  },
};
