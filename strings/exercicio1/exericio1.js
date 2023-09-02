const telefone1 = "98020-2689"; //9*****-8845
const telefone2 = "1234-3444"; //1***-**45

function mascararTelefone(numero) {
  let posicaoDoIfem = numero.indexOf("-");
  let inicioDoNumero = numero.slice(0, posicaoDoIfem);
  let finalDoNumero = numero.slice(posicaoDoIfem + 1);
  let doisNumerosFinais = finalDoNumero.slice(-2);
  return `${inicioDoNumero[0].padEnd(
    inicioDoNumero.length,
    "*"
  )}-${doisNumerosFinais.padStart(finalDoNumero.length, "*")}`;
}

console.log(mascararTelefone(telefone1));
console.log(mascararTelefone(telefone2));
