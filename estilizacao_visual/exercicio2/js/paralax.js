(function () {
  "use strict";

  const elementos = {
    paralax: "[data-paralax]",
    velocidadeDoParalax: "data-velocidade-paralax",
  };

  const itensParalax = document.querySelectorAll(`${elementos.paralax}`);

  function posicaoDoBackground() {
    itensParalax.forEach((paralax) => {
      let paralaxPosicaoY = getComputedStyle(paralax).backgroundPositionY;
      let paralaxPosicaoX = getComputedStyle(paralax).backgroundPositionX;

      console.log(paralaxPosicaoX, paralaxPosicaoY);

      if (paralaxEstiverSaindoDaPagina(paralax)) {
        paralax.style.backgroundPosition = `${paralaxPosicaoX} ${geraNovaPosicao(
          paralax
        )}px`;
      }
    });

    function paralaxEstiverSaindoDaPagina(paralax) {
      console.log(paralax.getBoundingClientRect().top);
      return paralax.getBoundingClientRect().top <= 0;
    }

    function geraNovaPosicao(paralax) {
      const velocidadeDoParalax =
        parseFloat(paralax.getAttribute(`${elementos.velocidadeDoParalax}`)) ||
        0.5;

      const novaPosicaoComValorPositivo =
        paralax.getBoundingClientRect().top * velocidadeDoParalax * -1; //vai devolver o valor positivo

      return novaPosicaoComValorPositivo;
    }
  }

  posicaoDoBackground();

  window.addEventListener("scroll", posicaoDoBackground);
})();
