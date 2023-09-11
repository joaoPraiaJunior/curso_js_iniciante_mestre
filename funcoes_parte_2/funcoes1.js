//Arrowfunctions, método de objeto, clousure, call(), apply(), bind(), encadear métodos, reveal pattern, factory, constructor

//Arrow functions
function funcaoDeclarada(teste = 0) {
  console.log("Função declarada");
  console.log(teste);
}

funcaoDeclarada(10);

const funcaoDeExpressao = (teste = 15) => {
  console.log("função de expressão");
  console.log(teste);
};

funcaoDeExpressao(20);

//Arrow function e retorno

const funcaoDeExpressaoComRetorno = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(funcaoDeExpressaoComRetorno(2, 3), "arrow function com retorno");

const arrowFunctionReduzida = (texto) =>
  `${texto}, aqui a função pode ser reduzida e retorna`;

console.log(arrowFunctionReduzida("meu texto"));

const retornandoObjeto = () => ({ objeto: "objeto" });

console.log(retornandoObjeto());

const recebeObjeto = retornandoObjeto();
console.log(recebeObjeto.objeto);
console.log(recebeObjeto["objeto"]);

//Escopo léxico x dinâmico
//A string vai ser printada a da variável que está no escopo da função teste
const texto = "string global";

function teste() {
  const texto = "string de escopo";
  console.log(texto);
}

teste();

//O this numa função declarada ele é dinâmico, ou seja, ele pode mudar conforme o seu uso
function testaThisGlobal() {
  console.log(this);
}

console.log(testaThisGlobal()); //Nesse caso, o this passa a ser global e no casodo navegador, ele é o elemento window

//O this atrelado ao um objeto ele passa a ser o próprio objeto
function testaThisObjeto() {
  console.log(this);
}

const objeto = {
  objeto: "objeto",
  testaThisObjeto,
};

objeto.testaThisObjeto();

//No caso das arrow functions, no navegador, o this deixa de ser o próprio objeto e passa a ser o window objeto global

const testaThisObjetoArroFunction = () => console.log(this);

const objeto2 = {
  objeto2: "objeto2",
  testaThisObjetoArroFunction,
};

objeto2.testaThisObjetoArroFunction();
