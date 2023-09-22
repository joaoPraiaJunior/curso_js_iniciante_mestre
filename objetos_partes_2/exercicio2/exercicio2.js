/*
Desafio
crie um objeto pessoa.
Deve ter uma propriedade get chamada usuarios que deve armazenar uma array de strings
Deve ter uma propriedade get chamada usuario que deve retornar o ultimo usuario da array
Sempre q alterar o usuario (set), nao deve substituir, mas sim colocar num array, se já não existir na array usuarios.
*/

(function () {
  let usuarios = [];

  this.pessoa = {
    get usuario() {
      if (usuarios.length) {
        return usuarios[usuarios.length - 1];
      }
    },

    set usuario(_usuario) {
      if (usuarios.includes(_usuario)) {
        throw new Erro("Usuario já existe");
      }

      usuarios.push(_usuario);
    },

    get usuarios() {
      //Evitar retornar a referência do array usuários, deve-se fazer uma cópia e ela pode ser feita com spread operator, Array.from() ou concat
      return [].concat(usuarios);
    },
  };
})();

console.log((pessoa.usuario = "João"));
console.log((pessoa.usuario = "Maria"));
console.log((pessoa.usuario = "Ruth"));

console.log(pessoa.usuarios);

//Nessa parte, como o usuário joão já existe, o set usuários vai printar o erro
// console.log((pessoa.usuario = "João"));
// console.log(pessoa.usuarios);

//Neste caso, como o método usuários get não tem set, a referência no escopo global do array usuários não atingirá o array usuários encapsulado
let teste = pessoa.usuarios;
console.log(teste);
teste = [0, 1];
console.log(teste);
console.log(pessoa.usuarios);

//Porém, pode-se utlizar métodos array e mexer na referência dos dois arrays o no escopo global e no encapsulado caso o array seja retornado com a mesma referência
teste = pessoa.usuarios;
console.log(teste.pop());
console.log(delete teste[0]);

//Mas como o retorno do método get usuarios() foi uma cópia de um array, a refência no teste não será a mesma.
console.log(teste);
console.log(pessoa.usuarios);
