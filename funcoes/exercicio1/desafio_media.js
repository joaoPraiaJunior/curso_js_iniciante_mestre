function calcularMedia() {
  let soma = 0;
  let qtd = arguments.length;
  for (let i = 0; i < qtd; i++) {
    if (typeof arguments[i] !== "number") {
      throw Error("somente numeros");
    }
    soma += arguments[i];
  }

  let media = soma / qtd || 0;

  return media;
}

console.log(calcularMedia(5, 10, 8));

/*
IMC
Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
*/

function calcularIMC(peso, altura, classificaIMC) {
  if (peso === undefined || altura === undefined) {
    throw Error("Precisa digitar o peso e altura");
  }

  let imc = peso / (altura * altura);
  console.log(imc.toFixed(2));
  if (typeof classificaIMC === "function") {
    return classificaIMC(imc);
  }

  return imc;
}

let imc2 = calcularIMC(88, 1.88, classificaIMC);

function classificaIMC(imc) {
  if (imc <= 16.9) {
    return "Muito abaixo do peso";
  } else if ((imc <= 18.4)) {
    return "Abaixo do peso";
  } else if ((imc <= 24.9)) {
    return "Peso normal";
  } else if ((imc <= 29.9)) {
    return "Acima do peso";
  } else if ((imc <= 34.9)) {
    return "Obesidade Grau I";
  } else if (imc <= 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

console.log(imc2);
