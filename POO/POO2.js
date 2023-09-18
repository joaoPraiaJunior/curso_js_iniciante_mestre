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
console.log(carijo)
console.log(carijo.obterTipo());
