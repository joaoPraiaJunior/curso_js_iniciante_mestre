// Destructuring serve para recuperar variáveis de um array ou objetos

const arr = [1, 2, 3];

const [d1, d2, d3] = arr;

console.log(d1, d2, d3); 
/*cada variável do array corresponde a um item do array. Seu eu utilizar assim [d1, ...d2] vai pegar o primeiro  item e o restante e 
se for assim [d1, , d2] vai pular o número 2
*/
