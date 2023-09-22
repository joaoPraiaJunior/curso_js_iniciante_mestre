/*
Exercício
crie um objeto produto.
Esse produto tem uma unica propriedade chamada contaQuantidade
Proteja essa propriedade para que receba apenas numeros maiores que 0
Toda vez que o valor de quantidade for consultado, mostre no console um contador
Evite variaveis no escopo global
*/

(function () {
  let quantidade = 0;
  let contador = 0;

  this.produto = {
    get contaQuantidade() {
      console.log(
        `Quantidade foi consultada ${++contador} vez${
          contador > 1 ? "es" : ""
        }  `
      );
      return quantidade;
    },

    set contaQuantidade(valor) {
      if (valor <= 0) {
        throw new Error("O valor precisa ser maior que 0");
      }
      quantidade = valor;
    },
  };
})();

produto.contaQuantidade = 21;
console.log(produto.contaQuantidade);

produto.contaQuantidade = 22;
console.log(produto.contaQuantidade);

produto.contaQuantidade = 23;
console.log(produto.contaQuantidade);

// produto.contaQuantidade = 0;
// console.log(produto.contaQuantidade);
