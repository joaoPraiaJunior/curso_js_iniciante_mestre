// Arguments

const soma = function somar() {
  console.log(arguments); //Tipo um array like
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(soma(10, 8, 7));
console.log(soma(10, 8, 7, 6, 9));

// Observação, o argumnts vai funcionar com funções declaradas e expressas. Porém não funciona com arrow functions
//propriedade name serve para saber o nome da função

console.log(soma.name);
