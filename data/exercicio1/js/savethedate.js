(function () {
  "use strict";
  let data = new Date();
  const ano = data.getFullYear();
  const umMinuto = 60 * 1000;
  const umaHora = 60 * umMinuto;
  const umDia = 24 * umaHora;

  const elementos = {
    copyAno: "[data-js='ano']",
    dataEHoraOficial: "[data-js='data-oficial']",
    contagem: "[data-js='contagem']",
  };

  const copyAno = document.querySelector(`${elementos.copyAno}`);
  const dataEHoraOficial = document.querySelector(
    `${elementos.dataEHoraOficial}`
  );

  const contagem = document.querySelector(`${elementos.contagem}`);
  const paragrafo = document.createElement("p");
  contagem.appendChild(paragrafo);

  const dataDoEvento = pegaDataOficial(dataEHoraOficial.innerText);

  function pegaDataOficial(dataEHoraOficial) {
    const [data, horas] = dataEHoraOficial.split(" ");
    const [dia, mes, ano] = data.split("/");
    const [hora, minutos] = horas.split("H");

    return new Date(ano, mes - 1, dia, hora, minutos);
  }

  function contagemRegreciva(dias, horas, minutos, segundos) {
    paragrafo.textContent = `Contagem regressiva: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos!`;
  }

  function atualizaData() {
    data = new Date();

    let contagemEmTimeStamp = dataDoEvento.getTime() - data.getTime();

    const diasParaOEvento = parseInt(contagemEmTimeStamp / umDia);
    contagemEmTimeStamp = contagemEmTimeStamp - diasParaOEvento * umDia;

    const horasParaOEvento = parseInt(contagemEmTimeStamp / umaHora);
    contagemEmTimeStamp = contagemEmTimeStamp - horasParaOEvento * umaHora;

    const minutosParaOEvento = parseInt(contagemEmTimeStamp / umMinuto);
    contagemEmTimeStamp = contagemEmTimeStamp - minutosParaOEvento * umMinuto;

    const segundosParaOEvento = parseInt(contagemEmTimeStamp / 1000);

    contagemRegreciva(
      diasParaOEvento,
      horasParaOEvento,
      minutosParaOEvento,
      segundosParaOEvento
    );

    finalizaContador(diasParaOEvento, segundosParaOEvento);
  }

  atualizaData();

  const intervalo = setInterval(atualizaData, 1000);

  function finalizaContador(dias, segundos) {
    if (dias <= 0 && segundos === 0) clearInterval(intervalo);
  }

  copyAno.textContent = ano;
})();
