(function () {
  "use strict";

  const elementos = {
    cardsEfeitoScroll: "data-addclass-on-scroll",
    cardsVelocidadeDoEfeitoScroll: "data-addclass-on-scroll-delay",
  };

  document.body.classList.remove("no-js");

  let cardsEfeitoScroll = document.querySelectorAll(
    `[${elementos.cardsEfeitoScroll}]`
  );

  console.log(cardsEfeitoScroll);

  function adicionaClasseAoScrolar() {
    if (cardsEfeitoScroll.length === 0) {
      window.removeEventListener("scroll", adicionaClasseAoScrolar);
    }

    cardsEfeitoScroll.forEach((card) => {
      if (cardsVisiveisNaTela(card)) {
        let velocidadeDoEfeitoScroll = card.getAttribute(
          `${elementos.cardsVelocidadeDoEfeitoScroll}`
        );

        setTimeout(function () {
          let classeDoEfeito = card.getAttribute(
            `${elementos.cardsEfeitoScroll}`
          );
          card.classList.add(classeDoEfeito);

          card.removeAttribute(`${elementos.cardsEfeitoScroll}`);
          card.removeAttribute(`${elementos.cardsVelocidadeDoEfeitoScroll}`);

          cardsEfeitoScroll = document.querySelectorAll(
            `[${elementos.cardsEfeitoScroll}]`
          );
        }, velocidadeDoEfeitoScroll);
      }
    });
  }

  function cardsVisiveisNaTela(card) {
    let cardVisivel = card.getBoundingClientRect();

    return (
      (cardVisivel.top <= 0 && cardVisivel.bottom >= 0) ||
      (cardVisivel.top >= 0 && cardVisivel.bottom <= innerHeight)
    );
  }

  window.addEventListener("scroll", adicionaClasseAoScrolar);

})();
