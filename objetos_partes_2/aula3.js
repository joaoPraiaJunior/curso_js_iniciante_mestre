//congelar propriedades de um objeto

const obj = {
  prop1: "prop1",
  prop2: "prop2",
  prop3: "prop3",
};

const objFreeze = { ...obj };
const objSeal = { ...obj };
const objPrevent = { ...obj };

//Com esse método não pode criar, nem atualizar e nem remover propriedades
Object.freeze(objFreeze);
console.log(delete objFreeze.prop1);

//Com esse método não pode criar e remover, mas pode-se atualizar
Object.seal(objSeal);
console.log((objSeal.prop3 = "prop3 atualizada"));
console.log(objSeal);
console.log(delete objSeal.prop3);

//Esse método só não vai permitir criar, mas pode remover e atualizar
Object.preventExtensions(objPrevent);
console.log((objPrevent.prop2 = "prop2 atualizada"));
console.log(objPrevent);
console.log(delete objPrevent.prop3);
console.log(objPrevent);

//Deep freeze
/*O congelanto de objetos é razo e está congelando somente a primeira camada de objetos. 
Objeto dentro de outro objeto não é congelado e não é possível fazer atribuição mas fazer um push num array, 
incluir uma propriedade no objeto interno */

const obj2 = {
  foo: "bar",
  propInterna: {},
};

Object.freeze(obj2);
obj2.foo = "bar2";
console.log(obj2);

//O objeto da propriedade interna foi alterado pois o object freeze só congela a primeira camada
obj2.propInterna.foo2 = "bar2";
console.log(obj2);

//Não pode alterar a proriedade da primeira camada
obj2.propInterna = { teste: "teste" };
console.log(obj2);

//Para congelar o obejto interno, deve-se congelar a propriedade em questão
Object.freeze(obj2.propInterna);
obj2.propInterna.foo3 = "bar3";
console.log(obj2);

//Para congelar todas as propriedades deve-se criar uma função recursiva

const obj3 = {
  foo: "bar",
  propInterna: {
    foo2: "bar2",
    propInterna2: {
      foo3: "bar3",
      array: [1, 2, 4],
    },
  },
};
function deepFreeze(obj3) {
  //O Object.getOwnPropertyNames() vai retornar todas as propriedas incluindo as não enumeradas
  const propNomes = Object.getOwnPropertyNames(obj3);
  propNomes.forEach((nome) => {
    let prop = obj3[nome];
    //Aqui é colocado a veriuficação de null pq o null também é um objeto
    if (typeof prop === "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(obj3);
}

deepFreeze(obj3);

obj3.foo = "aaaa";
obj3.propInterna.bar = "teste";
obj3.propInterna.propInterna2.foo3 = "teste 2";
obj3.propInterna.propInterna2.array = [];
// obj3.propInterna.propInterna2.array.push(4);

console.log(obj3);

/*
diferença entre keys() e getOwnPropertyNames()
Se ainda ficou na dúvida sobre o motivo de termos usado Object.getOwnPropertyNames() e não Object.keys() 
em nossa função deepFreeze, peço que rode o código abaixo e analise o resultado mostrado no console:

const obj = {};
Object.defineProperties(obj, {
    um: {enumerable: true, value: 1},
    dois: {enumerable: false, value: 2},
});
Object.keys(obj); 
Object.getOwnPropertyNames(obj); 

 */

//isFrozen
//Método para verificar se o objeto está congelado

console.log(Object.isFrozen(obj));
console.log(Object.isFrozen(obj3));

//Outra forma de congelar objetos
const obj4 = {
  nome: "obj4",
};

Object.defineProperty(obj4, "nome", {
  writable: false,
  configurable: false,
});

//A prorpriedade pode ser extendida e utilizando o preventExtensions o obj4 vai estar congelado
Object.preventExtensions(obj4);

console.log(Object.isFrozen(obj4));

/*
Assim como temos o método isFrozen() para verificar se um objeto está freeze ou não, temos mais dois métodos com nomes bastante auto-explicativos:

Object.isSealed() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

Object.isExtensible() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
*/
