//Arrowfunctions, método de objeto, clousure, call(), apply(), bind(), encadear métodos, reveal pattern, factory, constructor

//Closures
//Closures é a capacidade da função de enchergar as variáveis que estavam ao redor dela no momento que foi criada
const testantoClosure = (function () {
  let numero = 1;
  return function testandoClosures() {
    console.log(`Testando variável closure ${++numero}`);
    return `testando closures mais uma vez ${numero}`;
  };
})();

console.log(testantoClosure());

//Encadeamento de métodos "chain"

const calculo = {
  valor: 0,
  soma(numero) {
    this.valor += numero;
    return this;
  },
  subtrai(numero) {
    this.valor -= numero;
    return this;
  },
  resultado() {
    console.log(this.valor);
    return this;
  },
};

//Conforme o exemplo acima, todos os métodos foram encadeados e resultam em um reultado calculado
calculo.soma(5).soma(6).subtrai(1).resultado().soma(5).resultado();

//Reveal pattern
/*Não é utilizado nos dias atuais por causa que foram implementadas novas
features do javascript como ES6 module, utiliza-se webpack etc.
*/

const calculoRevealPattern = (function () {
  let valorDoCalculo = 0;

  function validaNumerosInteiros(numero) {
    if (typeof numero !== "number") throw TypeError("Entre com um número");
  }

  function somar(numero) {
    validaNumerosInteiros(numero);
    valorDoCalculo += numero;
    console.log(this); //Aqui o this tem o valor do próprio objeto, então pode-se retornar o this para encadear métodos
    return this;
  }

  function subtrair(numero) {
    validaNumerosInteiros(numero);
    valorDoCalculo -= numero;
    return this;
  }

  function resultado() {
    console.log(valorDoCalculo); //Aqui entra o conceito de closure. A função vai lembrar das variáveis criadas no seu escopo léxico
    return this;
  }

  return { //Retorna somente o que eu quero que seja acessível
    somar,
    subtrair,
    resultado,
  };
})();

calculoRevealPattern.somar(2).somar(2).resultado().subtrair(1).resultado();
calculoRevealPattern.somar("7");
