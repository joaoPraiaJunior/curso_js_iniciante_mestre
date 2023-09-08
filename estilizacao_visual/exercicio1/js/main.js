(function () {
  "use strict";

  const elementos = {
    menuDeNavegacao: ".nav",
    itensDeMenu: ".item-menu > a",
  };

  const menuDeNavegacao = document.querySelector(
    `${elementos.menuDeNavegacao}`
  );
  const itensDeMenu = document.querySelectorAll(`${elementos.itensDeMenu}`);

  itensDeMenu[0].classList.add("actived");

  function destacaItensDoMenu() {
    let posicoes = [...itensDeMenu].map((item) => {
      let hash = item.getAttribute("href");
      let selecionaConteudo = document.querySelector(hash);
      let posicaoDoConteudo = selecionaConteudo.getBoundingClientRect().top;
      return posicaoDoConteudo;
    });

    console.log(posicoes);

    let itemDeMenuAtivo = menuDeNavegacao.querySelector(".actived");
    if (itemDeMenuAtivo) itemDeMenuAtivo.classList.remove("actived");
    let itemDeMenu = pegaUltimoElementoVisto(posicoes);
    if (itemDeMenu) return itemDeMenu.classList.add("actived");

    return itensDeMenu[0].classList.add("actived");
  }

  function pegaUltimoElementoVisto(posicoes) {
    let posicaoAtual = posicoes.filter((posicao) => posicao < innerHeight / 2);
    console.log(posicaoAtual);
    console.log(itensDeMenu[posicaoAtual.length - 1]);
    return itensDeMenu[posicaoAtual.length - 1];
  }
  window.addEventListener("scroll", destacaItensDoMenu);
})();
