(function () {
  // exercício
  const elementoTrHeader = document.querySelector("thead tr");
  const elementosThsHeader = elementoTrHeader.querySelectorAll("th");
  const elementosThsNotas = elementoTrHeader.querySelectorAll("[data-js-nota]");
  const indicesTabela = {};

  function pegaIndiceDaNota(indice) {
    const ths = elementoTrHeader.querySelector(`[data-js-nota=${indice}]`);
    // const indiceThs = Array.prototype.indexOf.call(elementosThsHeader, ths);
    //const indiceThs = Array.from(elementosThsHeader).indexOf(ths);
    const indiceThs = [...elementosThsHeader].indexOf(ths);

    return indiceThs;
  }

  elementosThsNotas.forEach((th) => {
    let propriedadeNotas = th.getAttribute("data-js-nota");
    indicesTabela[propriedadeNotas] = pegaIndiceDaNota(propriedadeNotas);
    console.log(indicesTabela);
  });

  const trs = document.querySelectorAll("tbody tr");
  let i = 0;
  let media = 0;

  function somaNotas() {
    //const notas = Array.from(arguments);
    let notas = [...arguments];
    return notas.reduce((soma, nota) => {
      return soma + nota;
    }, 0);
  }

  function mediaNotas() {
    return somaNotas(...arguments) / arguments.length;
  }

  while (trs[i]) {
    const tds = trs[i].querySelectorAll("td");
    media = mediaNotas(
      parseFloat(tds[indicesTabela.nota1].textContent),
      parseFloat(tds[indicesTabela.nota2].textContent),
      parseFloat(tds[indicesTabela.nota3].textContent),
      parseFloat(tds[indicesTabela.nota4].textContent)
    );
    i++;

    tds[5].textContent = media.toFixed(1);
  }
})();
