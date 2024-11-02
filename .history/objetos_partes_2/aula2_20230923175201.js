//Introdução à descritores
//Algumas propriedades podem ser enumeradas ou não. As enumeraveis podem ser visualizadas no looping for in por exemplo

"use strict";
for (prop in String.prototype) {
  console.log(prop);
}

//descritores

const pessoa = {
  nome: "João",
};

//Ao usar esse método, ele vai mostrar a descrição da propriedade nome do objeto pessoa
console.log(Object.getOwnPropertyDescriptors(pessoa, "nome"));

/*{
  nome: {
    value: 'João',
    writable: true,
    enumerable: true,
    configurable: true
  }
}

A saída é o value/valor que é João, writable/reescrita que pode ser reescrita,
enumerable/enumerável que pode ser interavél com loop for in ou não ou configurável/configurable não permite que ela pode ser deletada
ou configurada. A única configuração aceita é writable de true para false
*/

//Por esse método, pode-se definir uma nova proprieade para o objeto
Object.defineProperty(pessoa, "sobrenome", {
  value: "Praia Junior",
});

console.log(Object.getOwnPropertyDescriptors(pessoa, "sobrenome"));

/*
{
 sobrenome: {
    value: 'Praia Junior',
    writable: false,
    enumerable: false,
    configurable: false
  }
}

Ao criar uma proprieade pelo método defineProperty, as configuraçoes por padrão aparecem em false
E essa propriedade nao poderá ser subscrita e para lançar o erro deve-se colocar o js em modo estrito
*/

// console.log((pessoa.sobrenome = "kkkkk"));

//para colocar mais de uma proprieadade usa-se o Object.defineProperties()

const pai = {
  nome: "pai",
  falar: function (msg) {
    console.log(`${this.nome} está falando`);
  },
};

//Se criar o objeto sem os parâmetros, a propriedade vai parar no protótipo
const filho = Object.create(pai, {
  nome: { value: "Carlos", enumerable: true },
});
console.log(pai);
console.log(filho);
console.log(filho.__proto__);
//O object create cria um novo objeto e pode-se setar qual objeto ele vai herdar a cadeia de protótipo e nesse caso, ele vai herdar o método falar do pai
console.log(filho.falar());

//O objeto espera receber um alvo e uma fonte. Porém, a fonte deve ser enumeráveis
const obj = {};

//Quando passa por parâmetro um objeto vazio, deixa de ter a mesma referência.
const novoObj = Object.assign({}, obj, filho);

console.log(novoObj);
console.log(novoObj === obj);
console.log(novoObj === filho);
console.log(novoObj === pai);

//Outra forma de criar cópias de um objeto é utilizar o spread operator
const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj3 = {
  b: 4,
  d: 5,
};

const novoObj2 = { ...obj2, ...obj3 };
const novoObj3 = { ...obj3, ...obj2 };

//Como o objeto obj2 foi colocado primeiro, a propriedade b do obj2 vai prevalecer
console.log(novoObj2);
//Nesse caso, como o objeto3 foi colocado primeiro, a propriedade b dele que vai prevalecer
console.log(novoObj3);

for (let prop in novoObj3) {
  console.log(`${prop}: ${novoObj3[prop]}`);
}

//Tanto pelo spread operator, quando pelo método assing ele não copia propriedades não enumeráveis
// Object.defineProperty(obj2, "naoEnumeravel", {
//   value: "naoEnumeravel",
// });

Object.defineProperties(obj2, {
  naoEnumeravel: {
    value: "naoEnumerável",
  },
  enumeravel: {
    value: "enumeravel",
    enumerable: true,
  },
});

const novoObj4 = Object.assign({}, obj3, obj2);
console.log(novoObj4);

const novoObj5 = { ...obj3, ...obj2 };
console.log(novoObj5);

//Propriedade criada com o enumerável false
console.log(obj2.naoEnumeravel);

//Outro método de object, é o keys. Porém, ele também não vai mostrar as propriedades/keys enumeradas
console.log(Object.keys(obj2));

//O values mostra os valores das propriedades. E também só mostra o valores enumeráveis
console.log(Object.values(obj2));

//O método entries vai printar um array bidimensional com as propriedades e valores
console.log(Object.entries(obj2));

//Os valores entries e values são menos crossbrowser

//Destructuring
const eu = { nome: "João", sobrenome: "Praia" };

//Aqui ele está armanzenando o nome e sobrenome do objeto dentro de duas constantes nome e sobrenome
const { nome, sobrenome } = eu;
console.log(nome);
console.log(sobrenome);

//Pode-se criar alia/apelidos para as variáveis conforme a sintaxe abaixo
const { nome: n, sobrenome: s } = eu;
console.log(n);
console.log(s);
