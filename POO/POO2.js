//Sintaxe de classes
//ES6
// a class Animal continua sendo uma função
class Animal {
  constructor(tipo) {
    if (tipo) this.tipo = tipo;
  }

  //Método
  obterTipo() {
    return this.tipo;
  }
}

//Colocar uma proiedade no prototype é igual a versão ES5
Animal.prototype.tipo = "desconhecido";

let cachorro = new Animal("cachorro");

console.log(cachorro);
console.log(cachorro.obterTipo());
console.log(typeof Animal);
console.log(Animal.prototype);

let sapo = new Animal();
console.log(sapo);
console.log(sapo.obterTipo());

//A palavra extendes faz a classe Galinha herdar e Animal os métodos e propriedades
class Galinha extends Animal {
  constructor(nome) {
    //A plavra super vincula a classe animal à classe galinha
    super("Ave");
    this.nome = nome;
  }
}

let carijo = new Galinha("carijó");
console.log(carijo);
console.log(carijo.obterTipo());

//Observações sobre o instanceof
const numero = 10;
const numero2 = new Number(10);
console.log(numero2);

//Valor primitivo não é instâncias de Number
console.log(numero instanceof Number);

//No caso do número2, ele é instância da função construtora Number
console.log(numero2 instanceof Number);
console.log(typeof numero2);

//Mas os construtores serão Number
console.log(numero.constructor);
console.log(numero2.constructor);

//Quando não é primitivo, as instâcias de arr1 e arr2 é Array
const arr1 = [];
const arr2 = new Array();
console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

//Da mesma maneira do Array, ocorre com RegExp()
const regex1 = /a/g;
const regex2 = new RegExp();
console.log(regex1 instanceof RegExp);
console.log(regex2 instanceof RegExp);

//Você pode saber se um determinado dado é seu tipo utilizando o instanceof ou typeof
