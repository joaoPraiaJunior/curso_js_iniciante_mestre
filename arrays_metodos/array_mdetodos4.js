let arr = [1, 3, 8, 10];

//Método push acrescenta itens no final do array alterando e retorna um novo índice do array
const metodoPush = arr.push(9, "string", true);
console.log(metodoPush);
console.log(arr);

//Método pop() remove o último item
const metodoPop = arr.pop();
console.log(metodoPop);
console.log(arr);

//Método shift() remove o primeiro item do array alterando a estrutura do array original
const metodoShift = arr.shift();
console.log(metodoShift);
console.log(arr);

//Metodo unshift() insere um item no início do array
const metodoUnshift = arr.unshift(100);
console.log(metodoUnshift);
console.log(arr);

//Método slice corta o array
const metodoSlice = arr.slice(0, 3);
console.log(metodoSlice);
console.log(arr);

//Método splice para acresentar e remover itens do array em qualquer posição. Cuidado, ele vai modificar o array original.
// splice(a partir do índice x, remova a qtd de itens, insira um item)
const metodoSplice = arr.splice(5, 1, 11);
console.log(metodoSplice);
console.log(arr);
