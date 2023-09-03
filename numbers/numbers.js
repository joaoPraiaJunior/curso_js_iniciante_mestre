//Numbers

let numero = 1234567.89;
let numero2 = 12.34567;

//numero.toFixed()
console.log(numero.toFixed(1)); // Diz a respeito ao número de casas decimais que preciso e é passado por parâmetro
console.log(typeof numero.toFixed(1)); // Trandorma em uma string

//numero.toPrecision()
console.log(numero.toPrecision(7)); //Retorna o valor com uma precisão específica
console.log(typeof numero.toPrecision(7)); //retorna uma string também

//numero.toExponential()
console.log(numero2.toExponential()); //Coverte um número em notação científica o numero
console.log(typeof numero2.toExponential()); // retorna em string também
console.log(numero2.toExponential(4)); // E o parâmetro é para retornar com um determinado numero de casas decimais

//numero.toString()
let numero3 = 16;
console.log(numero3.toString()); //Retorna o numero como string

//Números binários 0 = 0, 1 = 1, 2 = 10, 3 = 11, 4 = 100
console.log((0).toString(2)); //Passando o parâmetro 2, ele retorna o valor em números binários
console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));

//Hexadecimal 10 = a, 11 = b, .... 15 = f
console.log((10).toString(16)); //Passando o parâmetro 16 ele retorna um hexadecimal
console.log((15).toString(16));

//numero.toLocaleString()
let numero4 = 16.0;

console.log(numero4.toLocaleString("pt-BR")); //Você consegue visualizar um número conforme sua localidade que é passado por parâmetro
console.log(
  numero4.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
); // Aqui o número é transformado conforme a moeda local

//IsNaN()
let numeroString = "1.234aaa";
console.log(isNaN(numeroString)); //Verifica se um número vindo de uma string é número ou não
