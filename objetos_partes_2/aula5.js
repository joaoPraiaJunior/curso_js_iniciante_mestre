// Map e WeakMap

const meuMap = new Map();
const meuObj = new Object();

meuObj.pro1 = "prop 1";

//Diferente dos objetos, no método map você pode definir como chave qualquer coisa. Array, String, Objeto etc
meuMap.set("prop1", "prop 1");
meuMap.set(meuObj, meuObj);
console.log(meuMap.get("prop1"));
console.log(meuMap.get(meuObj));

//Pode-se inicializar o map com os pares de chave e valor e o método é array dentro de array
const meuMap2 = new Map([
  [0, "zero"],
  [1, "um"],
  [2, "dois"],
  [3, "tres"],
]);
//Método get pega o valor da chave passada por parâmetro
console.log(meuMap2.get(1));

//O método has verifica se há a chave com o valor
console.log(meuMap2.has(2));

//mostra as chaves do mapa
console.log(meuMap2.keys());

//Mostra os valores do mapa
console.log(meuMap2.values());

//Mostra as chaves e valores do mapa
console.log(meuMap2.entries());

//Iterações no Map
let chaves = meuMap2.keys();

for (let chave of chaves) {
  console.log(chave);
}

let valores = meuMap2.values();

for (let valor of valores) {
  console.log(valor);
}

//WeakMap
//Não tem como iterar o método. o weakmap é fraco
//A principal diferença entre Mape WeakMapé que a WeakMapchave não pode ser valores primitivos. Devem ser objetos
let _contador = new WeakMap();
class Contador {
  constructor() {
    // this.contador = 0;
    _contador.set(this, 0);
  }

  incrementar() {
    // this.contador++;
    _contador.set(this, _contador.get(this) + 1);
    // console.log(this.contador);
    console.log(_contador.get(this));
  }

  get contador() {
    return _contador.get(this);
  }
}

let testeContador = new Contador();

testeContador.incrementar();
testeContador.incrementar();
testeContador.incrementar();

console.log(testeContador);

//O cantador, caso o utilize como propriedade, fica vulnerável e se for num jogo, por exemplo, o jogador pode roubar...
// testeContador.contador = 100;
console.log(testeContador.contador);
