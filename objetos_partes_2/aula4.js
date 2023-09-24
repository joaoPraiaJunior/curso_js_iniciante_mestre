//Symbols
//Symbol é um dado primitivo que possui uma chave única

//Symbol não pode ser inicialiado com o operador new porque ele não é um construtor
const NOME = Symbol();
console.log(typeof NOME);

//Na nova versão do JS pode usar computer property names
let numero = 0;
const usuario = {
  ["teste" + ++numero]: "teste" + numero,
  ["teste" + ++numero]: "teste" + numero,
  ["teste" + ++numero]: "teste" + numero,
  [NOME]: "com symbol",
  nome: "sem symbol",
  4: "o número vira string",
};

console.log(usuario);
usuario.nome = "novo nome";
console.log(usuario);
//Seria legal utilizar symbol para evitar que outro dev sobscreva a propriedade nome
console.log(usuario[NOME]);

//Mas pode-se alterar utilizando esta forma
let propriedadeSymbol = Object.getOwnPropertySymbols(usuario);
console.log(propriedadeSymbol[0]);
console.log(usuario[propriedadeSymbol[0]]);
console.log(typeof usuario[propriedadeSymbol[0]]);
usuario[propriedadeSymbol[0]] = "Symbol aterado";
console.log(usuario);

//Symbol comno propriedade de objeto

//O node aceita propriedades
// class Contador {
//     contador = 0
//     incrementar() {
//       this.contador++;
//       console.log(this.contador);
//     }
//   }

//O Symbol pode ser utilizado para criar propriedades "escondidas"

class Contador {
  constructor() {
    this.simbolo = Symbol();
    this.contador = 0;
    this[this.simbolo] = 0;
  }
  incrementar() {
    this.contador++;
    this[this.simbolo] = this[this.simbolo] + 1;
    console.log(this.contador);
    console.log(this[this.simbolo]);
  }
}

let c1 = new Contador();

c1.incrementar();
c1.incrementar();
c1.incrementar();
console.log(c1.contador);
console.log(c1);

//Proteger o symbol em uma função auto invocável
const Contador2 = (function () {
  let simbolo = Symbol();
  return class Contador2 {
    constructor(nome) {
      this.nome = nome;
      this[simbolo] = 0;
    }

    incrementar() {
      this[simbolo]++;
      console.log(this.nome, this[simbolo]);
    }

    get contador() {
      return this[simbolo];
    }
  };
})();

const c2 = new Contador2("c2");
c2.incrementar();
c2.incrementar();
c2.incrementar();
const c3 = new Contador2("c3");
c3.incrementar();
c3.incrementar();
console.log(c2.contador);
console.log(c3.contador);
//Symbol, nao tem a ver com privacidade. Porém, é uma segurança a mais para evitar que seja subscrito facilmente em uma aplicação grande, por exemplo
console.log(c2);
//Não tenho acesso a váriável simbolo, mas tenho a referência dele.
console.log(Object.getOwnPropertySymbols(c2));
