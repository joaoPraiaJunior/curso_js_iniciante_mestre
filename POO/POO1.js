//POO
//Um objeto é uma unidade que une dados (propriedades) e suas funções (métodos)
//Coesão dados e comportamentos agrupados

//POO em JS x Clássica
//Em javascript a POO se dá através de protótipos (prototypes)
//Na POO clásica um objeto é criado a partir de uma classe
//Uma classe detém especificações é um  molde para criar objetos
//Quando eu crio um objeto, estou criando uma instância da classe
//Herança reaproveita propriedades e métodos comum
//POO não é reutilização de código
//Classe abstrata e classes concretas. ContaBancaria = abstrata ou genérica, corrente e poupança = concreta ou específica
//Associação um cliente tem uma conta bancária
//Classes (ES6) vs funções construtoras (ES5). Não se engane, class é um açucar sintático para funções construtoras

//ES5 - sintaxe da função construtora e prototypes

function Animal(tipo) {
  if (tipo) this.tipo = tipo;
}

let cachorro = new Animal("canino");

console.log(cachorro);
/*O objeto cachorro é guardado na propriedade prototype da função construtora Animal Animal.prototype
A partir do meu obejto do meu obejto gerado pela função construtora eu tenho eu tenho uma proriedade __proto__
que me dá acesso ao objeto armazenado no objeto prototype cachorro.__proto__*/

console.log(cachorro.__proto__ === Animal.prototype);

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

let gato = new Animal("felino");
let cobra = new Animal("réptil");

//Mesmo que dentro do objeto não exista o método, o js vai buscar um método na cadeia de protótipo de baixo ara cima.
console.log(cachorro.__proto__.__proto__ === Object.prototype);
console.log(cachorro.obterTipo());
console.log(gato.obterTipo());
console.log(cobra.obterTipo());

//Dentro do protótipo pode-se colocar propriedades também
Animal.prototype.tipo = "desconhecido";
//Caso você não passe um tipo e coloque uma condiçao, o tipo setado será o desconhecido acessado na cadeia de protótipos.
let peixe = new Animal();
console.log(peixe);
console.log(peixe.obterTipo());

//Quando pegamos emprestado um método de Array para iterar um nodeList, utilizamos o Array.prototype.map.call e o call é para acessar a função
//No prototye de Array há o map
let listaDeNos = ["li", "li"];
Array.prototype.map.call(listaDeNos, (lista) => console.log(lista.toString()));
//Ressalta-se que o protótipo é vivo
//Se não tem um método dentro do prototype, olhe no mdn o Polyfill para criar o metodo no prototype

let sapo = { tipo: "anfibio" };
console.log(sapo);
console.log(Animal.prototype.obterTipo.call(sapo));
//No exemplo acima, ele vai acessar o método obterTipo() do prototype de Animal e vai fazer funcionar a propriedade sapo

//Constructor e herança
//O Objeto tem uma propriedade constructor
//E nesse caso, é a função construtora Animal
console.log(cachorro.constructor);

function Galinha(nome, tipo) {
  this.nome = nome;
  Animal.call(this, tipo); //Herdou as propriedades da função construtora Animal
  //this.constructor = Galinha;
  //Esse método define uma propriedade e não deixa enumerar no looping for in
  //   Object.defineProperty(Galinha.prototype, "constructor", {
  //     value: Galinha,
  //     enumerable: false,
  //   });
}
//Aqui a galinha recebeu em seu protótipo o método obterTipo de Animal
Galinha.prototype = new Animal();

//A função construtora é galinha
Galinha.prototype.constructor = Galinha;

let carijo = new Galinha("carijo", "ave");
console.log(carijo);
console.log(carijo.obterTipo());
console.log(carijo.constructor);

for (let prop in carijo) {
  console.log(prop, "cadeia de protótipo"); //Leva em consideração a cadeia de protótipo
}

for (let prop in carijo) {
  if (carijo.hasOwnProperty(prop)) {
    console.log(prop); // Nesse método, não vai considerar a cadeia de protótipos
  }
}

//instanceof vai mostrar se o objeto faz parte da cadeia de protótipo

console.log(carijo instanceof Animal);
console.log(carijo instanceof Galinha);

//Se o objeto prototype pendurado na função construtora galinha é prototipo de carijó
console.log(Galinha.prototype.isPrototypeOf(carijo));
console.log(Animal.prototype.isPrototypeOf(carijo));

//Verifica o protótipo do objeto carijo o qual é animal
console.log(Object.getPrototypeOf(carijo));
console.log(carijo.__proto__);
console.log(carijo.__proto__ === Object.getPrototypeOf(carijo));
