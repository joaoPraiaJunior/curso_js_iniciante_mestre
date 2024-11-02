//Set e weakSet
//Set parece mais com um array a aobjetos. Ele vai armazenar somente valores

const setar = new Set();
const weakset = new WeakSet();

const array = [1, 2, 3, 4, 5, 6, 7];
//No array eu posso ter valores repetidos
//Mas no set, só pode haver valores únicos

setar.add(1);
setar.add(2);
setar.add(3);
setar.add(4);
//Não deixa inserir valor repetido
setar.add(4);
setar.add(6);

//A propriedade size tem o mesmo efeito da lenght do array
console.log(setar.size);
setar.delete(6);
console.log(setar.size);
console.log(setar.has(3));

//Para iterar usa-se o looping for of
for (let valor of setar) {
  console.log(valor);
}

//Diferente de um array ele o keys não vai acessar por index. Ele só aceita valores
for (let valor of setar.keys()) {
  console.log(valor);
}

for (let valor of setar.values()) {
  console.log(valor);
}

//Weakset
/*Se utilizar um set dentro de uma IIFE e aquela variável não tiver mais acesso, 
o garbage collector vai remover a referência do WekSet da memória liberando espaço deixando ocódigo mais peformático*/

(function () {
  let obj1 = { foo: "bar" };
  let obj2 = { foo2: "bar2" };

  setar.add(obj1);

  //No weakset não conseguimos colocar valores primitivos
  //Assim que o objeto for excluído, a refrência para aquele objeto no weakset será limpo
  //Só funciona com referência por isso não aceita dados primitivos
  weakset.add(obj2);
})();

for (let valor of setar) {
  console.log(valor);
}

//O wekset não é iterável ele só serve para armazenar referências à objetos
// for (let valor of weakset) {
//   console.log(valor);
// }

//Dá erro porque weakset depois da função invocável ele está preparado para ser limpo
//console.log(weakset.has(obj2));

console.log(setar.size);
