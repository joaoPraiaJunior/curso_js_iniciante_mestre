//Arrowfunctions, método de objeto, clousure, call(), apply(), bind(), encadear métodos, reveal pattern, factory, constructor

//Métodos de objetos
const cachorro = {
  nome: "Dashround",
  latir() {
    //No javascript moderno, a função pode ser declarda diretamente ao invés de latir: function(){}
    console.log(this.nome, "au au");
  },
};

cachorro.latir();

const gato = {
  nome: "ciames",
  miar,
};

function miar() {
  console.log(this.nome, "Miau, Miau");
}

gato.miar();

//call(), apply() e bind()
