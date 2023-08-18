// Métodos de criar arrays

// Literais
const arr = [10, 5, "olá", true];

//construtores/método
const arr2 = new Array(1, 2, 3, 5);

// função every() verifica se todos os elemntos passam no teste
const todosSaoVerdadeiros = arr.every(
  (elementos) => typeof elementos === "number"
);

console.log(todosSaoVerdadeiros);

// função some() verifica se há algum elemento pesquisado no teste
const algumEVerdadeiro = arr2.some((elementos) => elementos < 10);

console.log(algumEVerdadeiro);

// função filter() filtrar elementos de um array
const filtrarArray = arr2.filter((elementos) => elementos % 2);
const filtrarArrayString = arr.filter(
  (elementos) => typeof elementos === "string"
);

console.log(filtrarArray);
console.log(filtrarArrayString);

//função forEach() não precisa colocar dentro de um  array pois vai retornar undefined, você vai utilizar o método forEach quando quiser iterar sobre um array
arr.forEach((elementos) => {
  if (typeof elementos === "string") console.log(`${elementos}, João`);
});

console.log(arr);

//Função map() vai retornar um novo array transformado
const arrayMap = arr2.map(elementos => elementos * 2);
console.log(arrayMap)

console.log(arr, arr2);
