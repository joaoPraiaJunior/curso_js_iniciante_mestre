let arr = [1, 4, 6, 3, 8, 10];

//Método reverse() vai inverter os itens do array. Ele modifica o array original.
const metodoReverse = arr.reverse();
console.log(metodoReverse);
console.log(arr);

//Método reduce() ele retorna um ínico valor (reduzindo);
//parametros reduce(acumulador, valor atual, índice, array original)
const metodoReduceSoma = arr.reduce((acumulador, atual, i, _arr) => {
  console.log(i, _arr)
  return acumulador + atual;
}, 0); //setando o acumulador e caso nao passe, o primiro item do acumulador será o primeiro item do array e o atual é o segundo

console.log(metodoReduceSoma);
console.log(arr);

let arrayNomes = ["Maria", "João", "Joana", "Ruth"];
const metodoReduceNomes = arrayNomes.reduce((nomes, nomeAtual) => {
  let primeiraLetra = nomeAtual[0];
  nomes[primeiraLetra] ? nomes[primeiraLetra]++ : (nomes[primeiraLetra] = 1);
  return nomes;
}, {});
console.log(metodoReduceNomes);

//retornar um array com números unicos
let arrayNumeros = [1, 10, 10, 20, 20, 50, 7, 8, 10, 15];
const metodoReduceNumeros = arrayNumeros.reduce(
  (numerosUnicos, numeroAtual) => {
    if (numerosUnicos.indexOf(numeroAtual) < 0) {
      numerosUnicos.push(numeroAtual);
    }
    return numerosUnicos;
  },
  []
);

console.log(metodoReduceNumeros);
