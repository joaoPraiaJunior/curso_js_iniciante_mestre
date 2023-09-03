function getRandomNumber(inicio = 0, fim = 5, inteiro = true) {
  //   inicio = inicio || 0;
  //   fim = fim || 1;

  let numeroRandomico = Math.random(inicio) * (fim - inicio - 1) + inicio;

  return inteiro ? parseInt(numeroRandomico) : numeroRandomico;
}

console.log(getRandomNumber(0, 10));
