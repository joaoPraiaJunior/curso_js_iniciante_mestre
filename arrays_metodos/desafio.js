// desafio métodos array

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

let somaDasNotas = somaNotas(10, 7, 7);
console.log(somaDasNotas);
let mediaDasNotas = mediaNotas(10, 7, 7);
console.log(mediaDasNotas);
