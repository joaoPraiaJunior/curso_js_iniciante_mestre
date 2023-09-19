//Classes abstradas
//São classes que só podem ser extendidas

class Animal {
  constructor(tipo) {
    if (this.constructor === Animal)
      throw new Error("Animal é uma classe abstrata ");
    if (tipo) this.tipo = tipo;
  }
  //Colocando o erro aqui vai obrigar a criar o método na classe que herda de animal
  comer() {
    throw new Error("Método comer precisa ser implementado");
  }
}

class Gato extends Animal {
  constructor(raca) {
    super("Felino");
    this.raca = raca;
  }

  comer() {
    console.log(`O ${this.raca} está comendo`);
  }
}

//const animal = new Animal("Desconhecido"); //depois que colocou o if no construtor, a classe passou a ser abstrata

const siames = new Gato("Siames");

console.log(siames);
console.log(siames.comer());

//Métodos estáticos
class Humano {
  constructor(nacionalidade) {
    this.nacionalidade = nacionalidade;
    console.log("Chamando método estático dentro do constructor");
    Humano.dormir();
  }

  //Static faz com que o método andar não faça parte do objeto, mas é da Classe Humano
  static andar() {
    //O this é a própria classe
    console.log(this);
    console.log("Andando");
    //A partir de um método estático, pode-se chamar o método dentro do método pois o this é a Classe Humano
    this.dormir();
  }

  static dormir() {
    console.log("dormindo");
  }
}

const brasileiro = new Humano("brasileiro");
console.log(brasileiro);
console.log(Humano.andar());
