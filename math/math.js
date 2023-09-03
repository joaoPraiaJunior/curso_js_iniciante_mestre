//Math min(), max(), pow(), round(), sqrt(), cbrt(), random()

//Math não é um construtor, ele é um objeto com várias propriedades e métodos

console.log(Math.PI); // Retorna o valor de PI

//Math.min()
console.log(Math.min(1, 2, 3, 4, 5)); //Retorna o menor valor

//Math.max()
let array = [1, 2, 4, 5, 10];
console.log(Math.max(...array)); //Retorna o maior valor

//Math.round(). floor(), ceil(), pow(), sqrt(), cbrt()
console.log(Math.round(45.77777)); //Números abaixo de 5 esse método arrendonda para baixo e acima de 5 para cima
console.log(Math.floor(49.99999999)); //Esse método arrendonda para baixo
console.log(Math.ceil(49.55555555)); //Esse método arrendonda para cima
console.log(Math.pow(3, 3)); //retorna resultado de 3 ao cubo
console.log(3 ** 3); //retorna também o mesmo resltado de pow() porém, não é crossBrowser
console.log(Math.sqrt(4)) //retona a raíz quadrada
console.log(Math.cbrt(8)) //retorna  raiz cúbica


//Math.random()
console.log(Math.random()) //retorna um número aleatório
console.log(Math.floor(Math.random() * 10) + 1) //retorna um número de 1 a 10 arrendondando para baixo

