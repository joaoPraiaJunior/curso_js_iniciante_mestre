/* Funcoes são objetos invocáveis';
Podem ser literais;
Em alguns casos ocorre hoisting;
São objetos de primeira classe;
No ES5 as funções são o único modo de gerar escopo;
Podem ser IIFE (Immdiately, Invoked, Function Expression);
Podem ter propriedades internas como arguments e name;
*/

// Funcoes declaradas

function declarada(teste) {
  console.log(teste, "testando funcao");
}

declarada();

// Hoisting: capacidade do javascript de 'içar' uma função declarada

declaradaHoisting();

function declaradaHoisting() {
  console.log("testando funcao declarada Hoisting");
}

// o mesmo não aontece com funções de expressão

const expressaoHoisting = function () {
  console.log("testando funcao expressao Hoisting 2");
}

expressaoHoisting();