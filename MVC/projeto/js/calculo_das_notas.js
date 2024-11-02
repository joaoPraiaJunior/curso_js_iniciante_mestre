function somaDasNotas() {
  // const numbers = Array.from(arguments)
  const notas = [...arguments];
  return notas.reduce(function (somaDasNotas, notaAtual) {
    return somaDasNotas + notaAtual;
  }, 0);
}
function calculaAMediaDasNotas() {
  return somaDasNotas(...arguments) / arguments.length;
}
