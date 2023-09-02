//  replace(), replaceAll(), indexOf(), lastIndex(), includes()
let string1 = "Minha String";
console.log(string1);
console.log(string1.replace("i", "I")); //só modifica a primeira letra i
console.log(string1.replace(/i/g, "I")); // Com expressão regular, modifica todas as letras
console.log(string1.replaceAll("i", "I")); //modifica todas as letras mas não tem suporte para todos os browsers

console.log(string1.indexOf("string")); //vai retornar o índice no qual começa a string no caso da primeira ocorrência

console.log(string1.lastIndexOf("i")); //Vai retornar a última ocorrênca no formato de índice
console.log(string1.lastIndexOf("b")); //Caso não encontre vai retornar -1
console.log(string1.includes("i")); //Caso encontre a string, retorna um booleano
console.log(string1.lastIndexOf("b") > -1); //retorna m, booleano

//slice(), substring()
console.log(string1.slice(2, 5)); //O método slice ele corta parte da string, ela starta da posição 2 e vai até a 5 e este é excluído
console.log(string1.slice(2)); //se não passar o parâmetro o valor final é -1, ou seja, vai até o final
console.log(string1.substring(2, 5)); //O método slice ele corta parte da string, ela starta da posição 2 e vai até a 5 este é excluído e não trabalha bem com números negativos
console.log(string1.slice(-6)); //O slice aceita valores negativos que começa por trás da string

//toLowerCase() e toUpperCase()
console.log(string1.toLowerCase()); //Deixa todas as letras minúsculas
console.log(string1.toUpperCase()); //Deixa todas as letras maiúsculas

//valueOf()
let stringObj = new String("Minha Nova String como objeto");
console.log(stringObj);
console.log(stringObj.valueOf()); //retorna o valor primitivo de string do objeto
console.log(stringObj.toString()); //Faz a mesma coisa do valueOf

//trim() verificar o uso em browsers antigos
const string2 = " Nova string ";
console.log(string2.trim()); //remove os espaços do ínicio e do fim de uma string e espaços vazios
console.log(string2.trimEnd()); //remove os espaços do fim de uma string
console.log(string2.trimStart()); //remove os espaços do início de uma string

//padStart(), padEnd() verificar o uso em browsers antigos
const string3 = "1";
console.log(string3.padStart(2, "0")); //vai preencher com 0 até atingir o comprimento de 2 a partir do ínicio
console.log(string3.padEnd(2, "0")); //vai preencher com 0 até atingir o comprimento de 2 a partir do final

//startsWith() endsWith()
const string4 = "Hoje é sexta";
console.log(string4.startsWith("Hoje", 0)) //Verifica se começa com a string Hoje. O segundo parâmentro indica o índice que ele vai começar a buscar
console.log(string4.endsWith("Hoje")) //Verifica se termina com a string Hoje


//charAt() length
const string5 = "abcdefgh";
console.log(string5.charAt(1)) //O parâmetro desse método indica a posição que se quer recuperar
console.log(string5.charCodeAt(0)) //Vai recuperar o código da tabela unicode
console.log(string5.length) // mostra o comprimento da string
