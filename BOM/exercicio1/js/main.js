(function () {
  "use strict";

  const elementos = {
    corpoDoDocumento: "fx",
    barraDoTopo: ".top-bar",
  };

  const corpoDoDocumento = document.getElementsByClassName(
    `${elementos.corpoDoDocumento}`
  ); //como o className cospe uma HTMLcolection e ela é viva, pode-se perguntar se esse elemento existe na página

  const alturaDabarraDoTopo = document.querySelector(
    `${elementos.barraDoTopo}`
  ).clientHeight;

  function alteraABarraDoTopoAoScrolar() {
    const calculoDaScrolagem = alturaDabarraDoTopo * 3;
    if (pageYOffset > calculoDaScrolagem && !corpoDoDocumento[0]) {
      document.body.classList.add("fx"); //Aqui pergunta se não existe na página, se a HTMLcolection é vazia, ele vai add a classe
    } else if (pageYOffset <= calculoDaScrolagem && corpoDoDocumento[0]) {
      document.body.classList.remove("fx"); //Aqui se tem, remove e assim deixa o código mais performatico.
    }
  }

  window.addEventListener("scroll", alteraABarraDoTopoAoScrolar);
})();
