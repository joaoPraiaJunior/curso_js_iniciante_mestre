//Funções construtoras que vai ser usada para criar objetos e deve criar com letra maiúscula

function Atividade(nome) {
  "use strict"; //Usar o mo estrito ajuda quando o dev tentar criar uma instância de atividade sem  palavra new que gerar problemas poluíndo o escopo global
  let _nome = nome;
  this.dataCriacao = new Date();
  this.atualizaAtividade = null;
  this.changeName = function (novoNome) {
    if (novoNome) {
      //Com essa condição blindamos a propriedade caso não passamos nenhum nome por parâmetro
      _nome = novoNome;
      this.atualizaAtividade = new Date();
    }
  };

  this.pegaNome = function () {
    //Criar essa função com a variável let não deixa o nome privado e impede que atualizam o nome por atividade.nome = "novo nome"
    return _nome;
  };
}

const atividade1 = new Atividade("Alteracao no nome");
console.log(atividade1);

atividade1.changeName("Tarefa atualizada");

console.log(atividade1);

const atividade2 = new Atividade("Minha nova tarefa");
console.log(atividade2);

atividade2.changeName("Alterar nome da nova tarefa");
console.log(atividade2);

console.log(atividade1.pegaNome());
atividade1.changeName("lalalal"); //Deixando os itens privados, a única forma de atualizar o nome é dessa forma.
console.log(atividade1.pegaNome());


// const atividade3 = Atividade();

// console.log(dataCriacao) o método dataCriacao vai para escopo global e pode atualizar todas instâncias criadas de Atividade