function quantoFaltaPara(m, d) {
  const data = new Date();
  data.setHours(0);
  data.setMinutes(0);
  data.setSeconds(0);
  data.setMilliseconds(0);
  const umDia = 24 * 60 * 60 * 1000;

  let ano = data.getFullYear();
  const dataDoAniversario = new Date(ano, m - 1, d);
  const dataTS = data.getTime();
  let dataDoAniversarioTS = +dataDoAniversario; //Colocando o sinal de +na frente tem o mesmo efeito do getTime()
  if (dataDoAniversarioTS < dataTS) {
    dataDoAniversario.setFullYear(++ano);
    dataDoAniversarioTS = +dataDoAniversario;
  }
  const diferencaDeDiasParaONiver = dataDoAniversarioTS - dataTS;

  return parseInt(diferencaDeDiasParaONiver / umDia);
}
