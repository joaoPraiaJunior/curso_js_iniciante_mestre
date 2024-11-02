// Funcoes auto-invocaveis

/* funcoes sao tratadas como qualquer objeto;
Passadas como parametros para outras funçoes;
Atribuídas em propriedades de objetos (métodos);
retornadas como resultao de outra função;
Podem ter suas próprias propriedades
*/

// NO ES5 a única forma de definir escopo de variáveis eram através de funcoes

const g = false; 

function minhaFunc() {
  if (g === true) var x = 10;
  console.log(x); // 10
}

minhaFunc();

//console.log(x) ->  erro

// Funcoes auto-invocaveis são utilizadas para evitar a poluição do escopo global

(function (n1, n2, n3) {
  "use strict"; //Evita poluir o escopo global
  let isValid = false;
  console.log("teste", isValid);

  function init() {
    return n1 + n2 + n3;
  }

  console.log(init());
})(1, 2, 3);

/* Não vai precisar de IIFE se:

usar um bundle (Webpack, parcel, outros)
Usar ESModules (browsers modernos)
Programar em Node

*/
