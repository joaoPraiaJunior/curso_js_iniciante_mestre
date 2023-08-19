let arr = [4, 5, 10, 20, 35, 4, 5];

//Método indexof retorna o índice/posição do item perguntado
console.log(arr.indexOf(5));

//Método lastIndexOf retorna o último índice/posição do item perguntado
console.log(arr.lastIndexOf(5));

//Esses dois métodos se não encontrarem nada, vai retornar -1
console.log(arr.indexOf(5555));

//Para retornar um booleano, pode utilizar o > -1
console.log(arr.indexOf(5555) > -1);

//O includes verifica se há algo incluído no array tem o mesmo efeito do -1
console.log(arr.includes(5555));

//Método find() retorna o primeiro valor de array que satisfaça a condição
const metodoFind = arr.find((elementos) => elementos > 10);
console.log(metodoFind);

//Método find() retorna o index do primeiro valor de array que satisfaça a condição
const metodoFindIndex = arr.findIndex((elementos) => elementos > 10);
console.log(metodoFindIndex);
