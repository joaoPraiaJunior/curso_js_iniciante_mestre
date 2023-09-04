(function () {
  "use strict";

  const data = new Date();
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

  const dataDoEvento = pegaDataOficial(dataEHoraOficial.innerText);

  let contagemEmTimeStamp = dataDoEvento.getTime() - data.getTime();

  const diasParaOEvento = parseInt(contagemEmTimeStamp / umDia);
  contagemEmTimeStamp = contagemEmTimeStamp - diasParaOEvento * umDia;

  const horasParaOEvento = parseInt(contagemEmTimeStamp / umaHora);
  contagemEmTimeStamp = contagemEmTimeStamp - horasParaOEvento * umaHora;

  const minutosParaOEvento = parseInt(contagemEmTimeStamp / umMinuto);
  contagemEmTimeStamp = contagemEmTimeStamp - minutosParaOEvento * umMinuto;

  const segundosParaOEvento = parseInt(contagemEmTimeStamp / 1000);

  function pegaDataOficial(dataEHoraOficial) {
    const [data, horas] = dataEHoraOficial.split(" ");
    const [dia, mes, ano] = data.split("/");
    const [hora, minutos] = horas.split("H");

    return new Date(ano, mes - 1, dia, hora, minutos);
  }

  contagemRegreciva(
    diasParaOEvento,
    horasParaOEvento,
    minutosParaOEvento,
    segundosParaOEvento
  );

  function contagemRegreciva(dias, horas, minutos, segundos) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = `Contagem regressiva: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos!`;
    contagem.appendChild(paragrafo);
  }

  copyAno.textContent = ano;
})();
