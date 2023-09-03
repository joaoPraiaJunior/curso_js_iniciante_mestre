(function () {
  "use strict";

  const elementos = {
    paragrafo: "[data-js='paragrafo']",
  };

  const paragrafos = Array.from(
    document.querySelectorAll(`${elementos.paragrafo}`)
  );
  const textosDosParagrafos = paragrafos.map((paragrafo) => paragrafo.innerText);
  const quantidadeMaximaDeCaracteres = 100;

  paragrafos.forEach((paragrafo, indice) => {
    if (paragrafo.innerText.length > quantidadeMaximaDeCaracteres) {
      paragrafo.textContent = `${paragrafo.innerText.substring(
        0,
        quantidadeMaximaDeCaracteres
      )}...`;

      paragrafo.parentElement.classList.add("text-hidden");

      criaBotoesDeAbrirTexto(paragrafo, indice);
    }
  });

  function criaBotoesDeAbrirTexto(paragrafo, indice) {
    const botao = document.createElement("button");
    const iconeDeAcaoDoBotao = document.createElement("i");
    iconeDeAcaoDoBotao.className = "fas fa-chevron-down";
    botao.appendChild(iconeDeAcaoDoBotao);
    paragrafo.parentElement.appendChild(botao);
    botao.addEventListener("click", function (evento) {
      acaoNoTextoDoCard(evento, paragrafo, indice);
    });
  }

  function acaoNoTextoDoCard(evento, paragrafo, indice) {
    const card = evento.currentTarget.parentElement;
    const iconeDeAcaoDoBotao = card.querySelector("i");
    card.classList.toggle("text-hidden");
    iconeDeAcaoDoBotao.classList.toggle("fa-chevron-down");
    iconeDeAcaoDoBotao.classList.toggle("fa-chevron-up");

    if (card.classList.contains("text-hidden")) {
      paragrafo.textContent = `${textosDosParagrafos[indice].substring(
        0,
        quantidadeMaximaDeCaracteres
      )}...`;
    } else {
      paragrafo.textContent = textosDosParagrafos[indice];
    }
  }
})();
