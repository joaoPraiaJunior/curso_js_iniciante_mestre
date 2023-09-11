//Arrowfunctions, método de objeto, clousure, call(), apply(), bind(), encadear métodos, reveal pattern, factory, constructor

//Métodos de objetos
const cachorro = {
  nome: "Dashround",
  latir() {
    //No javascript moderno, a função pode ser declarada diretamente ao invés de latir: function(){}
    console.log(this.nome, "au au");
  },
};

cachorro.latir();

const gato = {
  nome: "siamês",
  miar,
};

function miar() {
  console.log(this.nome, "Miau, Miau");
}

gato.miar();

//call(), apply() e bind()

const vaca = {
  nome: "Mimosa",
  som() {
    console.log(this);
    //mujir(); //Aqui o objeto perde o this como escopo e para funcionar, precisa chamar o call

    mujir.call(this); //Aqui o escopo é mudado e this torna-se o objeto
  },
};

function mujir() {
  console.log(this.nome, "Mu, Mu");
}

vaca.som();

function teste(str, numero) {
  console.log(this);
  console.log(this.str, this.numero);
  console.log(str, numero);
}

teste.call({ str: "João é", numero: 10 });
/*Método call transforma o this que era do escopo global para o escopo da função, isto é, 
o método call permite a definição do this e qualquer objeto fornecido*/

function Div(largura, altura) {
  this.largura = largura;
  this.altura = altura;
}

function Cor(largura, altura, cor) {
  Div.call(this, largura, altura);
  this.cor = cor;
}

let cor = new Cor(300, 50, "magenta");
console.log(cor); //O Call nesse exemplo é utilizado para encadear construtores

const pessoa = {
  nome: "João",
  sobrenome: "Praia",
};

function saudacao(saudacao, mensagem) {
  return `${saudacao} ${this.nome} ${this.sobrenome} ${mensagem}`;
}

let mensagem = saudacao.apply(pessoa, [
  "Olá amigo,",
  "você é bem vindo nesse local!",
]); //Nesse caso, o this é o objeto pessoa e o método apply permite que seja passado um array como parâmetro

console.log(mensagem);

//O applly permite anexar um array ao outro
let array = [1, 2, 3];
let numeros = [5, 6, 7];

array.push.apply(array, numeros);
console.log(array);

let novaFuncaoTeste = teste.bind({ str: "Ruan", numero: 10 });
novaFuncaoTeste("Praia", 50); //O método bind() vai criar uma nova função quando for chamado e o this é transformado ara o valor específico
