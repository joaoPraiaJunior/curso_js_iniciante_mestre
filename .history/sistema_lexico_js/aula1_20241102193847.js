// Tipos de dados primitivos strings, number(int, floats), boolean, symbol. Dados primitivos são representados por valores e não possuem métodos.
//"use strict"; // javascript em modo estrito

console.log("JavaScript funcionando 2023");

let nome = "João";
console.log(10 + 20, nome);

// Comentário

/*
Comentário
*/

// duas instruções na mesma linha precisa utilizar ;

const nomeDeFamilia = "Praia";

// nao pode começar com números as variáveis, é permitido começar com $

function foo() {
  x = 20;
}

foo();

console.log(x); // Por não declarar a variável x, ela passa para o escopo global... Porém, quando é utilizado no modo estrito o js barra essa váriável mostrando um erro.

//Tomar cuidado ao utilizar parâmetros quando não está no modo estrito

function multiplicar(n1, n2) {
  return n1 * n2;
}

console.log(multiplicar(5, 7)); // o resultado será 49, pq ele pega somente o último parâmetro r multiplica...

// Tipagem dinâmica

let y = 10;
y = "uma string";
console.log(y);

// o Js permite utilizar aspas duplas e aspas simples. Porém, quando utilizar as apas pode-se usar o escape \ ou inverter as aspas.

let aspas = 'Jao Praia é sobrenome não "Praia" ehehe';
console.log(aspas);

// Dependendo da situação, o javascritp converte uma string para realizar um cálculo. Boa prática sempre converter para tipo number;

let multiplicacao = "2" * 2;
console.log(multiplicacao);

// O this no javascript ele é dinâmico.

function testarThis() {
  console.log(this); // aqui o this será o objeto window
}

console.log(testarThis);

const objThis = {
  n: 0,
  testarThis: testarThis,
};

objThis.testarThis(); // aqui o this será o próprio objeto no caso da arrow function o objeto this passa a ser um objeto window global;

//Valores Truth e Falsy. Falsy são o 0, "", NaN, undefined, null e false. Já o Truth são todos os demais.

// Undefined x null. undefined significa que uma variável foi declarada, mas não atribuída. Enquanto null é utilizado de forma intencional para representar a ausência de valor
let variavelTeste;
console.log(variavelTeste);
console.log(typeof variavelTeste);
variavelTeste = null
console.log(variavelTeste);
console.log(typeof variavelTeste);


//Valor x referência. Variáveis que apontam para um dado primitivo, elas armazenam um valor. Variáveis que armazenam array ou objeto apontam para uma referência na memória.

let array1 = []
let array2 = []
console.log(array1 === array2) // A comparação é falsa porque cada variável de array é um espaço na memória diferentes.
let array3 = array2
array3.push(1)
console.log(array2, array3) // O array2 também é modificado porque a mesma referência na memória é atribuida no array3
