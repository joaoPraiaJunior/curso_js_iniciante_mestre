//Objetos parte 2
//getters e setters

//IIFE para não sujar o escopo global
(function () {
  //"use strict" se utilizar o  modo estrito, o objeto global não poderá ser atualizado
  let raca = "";
  // const racasPermitidas = {
  //   dashround: 1,
  //   lhasaapso: 2,
  //   lulu: 3,
  //   viralata: 4,
  // };

  const racasPermitidas = ["dashround", "lhasaapso", "lulu", "viralata"];

  const cachorro = {
    nome: "Scoob",
    get raca() {
      return raca;
    },
    set raca(_raca) {
      //Aqui são utilizados 3 métodos diferentes para abordar se há raça no objeto e no array
      // if (!racasPermitidas[_raca]) {
      // if (racasPermitidas.includes(_raca) === false) {
      if (racasPermitidas.indexOf(_raca) < 0) {
        throw new Error("Essa raça não existe");
      }
      raca = _raca;
    },
  };

  /*Se colocar window.cachorro = cachorro, o obejto poderá ser acessado por fora da função uma vez 
  que o window é objeto global. No node pode-se usar this.cachorro = cachorro
  */

  this.cachorro = cachorro;
})();

console.log(cachorro);
cachorro.raca = "viralata";
console.log(cachorro.raca);
