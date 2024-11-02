// Objetos armazenam chaves e valores

//sintaxe literal
const obj1 = {
  nome: "Joao",
};
console.log(obj1);

//sintaxe formal
const obj2 = new Object();
obj2.nome = "Praia";
obj2["idade"] = 27;

console.log(obj2);

//Por debaixo dos panos o js converte string num objeto a qual tem acesso a propriedade length
const minhaString = "minha string";
console.log(minhaString.length);

const minhaString2 = new String("Minha string 2");
console.log(minhaString2);
console.log(minhaString2.length);
console.log(minhaString2.valueOf()); // o valueOf recupera o valor da string como dado primitivo

//No javascript há construtores do tipo new Number(), new Boolean(), new Array(), new Regex() etc.

const data1 = Date();
console.log(data1, typeof data1);

const data2 = new Date();
console.log(data2, typeof data2);

console.log({} === {}); //O valor vai ser false, devido que o js armazena o valor do objeto por referência na memória (posição) do computador do usuário.

console.log([1, 2] === [1, 2]);

//O this com uma uma função declarada é dinâmico. Numa função de expressão o this é global.

function changeName(nome) {
  console.log(nome);
  console.log(this);
  this.nome = nome;
  this.dataCriacao = new Date();
}

const atividade1 = {
  nome: "task",
  dataCriacao: new Date(),
  upadade: null,
  completada: false,
  changeName,
};

const atividade2 = {
    nome: "task",
    dataCriacao: new Date(),
    upadade: null,
    completada: false,
    changeName,
  };
  

//changeName("Fora do objeto"); // o This é o objeto Global e no browser seria o window

atividade1.changeName("No objeto") //Nesse caso, o objeto é this
atividade2.changeName("Alteração do nome")

console.log(atividade1)
console.log(atividade2)
