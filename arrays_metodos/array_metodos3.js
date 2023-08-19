let arr1 = [1, 5, 7];
let arr2 = [8, 9, 10];

// Método toString() transforma em string
console.log(arr1.toString());

//método join() é parecido com o toString(), porém esse método pode receber parâmetros para separar as strings
console.log(arr1.join(" - "));

//método concat junta arrays, e pode ser passado outros parâmetros dentro do método;
let concatenarArrays = arr1.concat(arr2, 5, "joao", true, ["olá", "mundo"]);
console.log(concatenarArrays);

//Para fazer uma cópia de um array para ser alerado
let arr3 = [].concat(arr1);
console.log((arr3[arr3.length] = "novo valor"));

console.log(arr1, arr3)
