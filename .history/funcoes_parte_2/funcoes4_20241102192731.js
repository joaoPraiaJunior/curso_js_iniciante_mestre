//Arrowfunctions, método de objeto, clousure, call(), apply(), bind(), encadear métodos, reveal pattern, factory, constructor

// Factories Functions
//São funções que retornam objetos que têm propriedades e métodos de qualquer classe.

function criarCachorro(nome) {
	let posicao = 0;
	return {
		nome,
		latir() {
			console.log(this.name, 'sstá latindo');
		},
		andar(distancia) {
			posicao += distancia;
			console.log(this.nome, 'andou ', distancia, 'metros');
		},
		comer() {},

		get posicao() {
			//Getters são métodos, mas você pode puxá-los como propriedades
			console.log(`A posição atual do ${nome} é ${posicao}`);
			return posicao;
		},
	};
}
const scooby = criarCachorro('Scooby');
console.log(scooby);
scooby.andar(10);
scooby.andar(5);

console.log(scooby.posicao); //É um método, mas você pode chamá-lo como propriedade é um getter;

const gamora = criarCachorro('Gamora');
gamora.andar(20);
gamora.andar(-3);
console.log(gamora.posicao);

//Função construtora

function Cachorro(nome) {
	let posicao = 0;
	this.nome = nome;
	this.latir = function () {
		console.log(this.nome, 'está latindo');
	};
	this.andar = function (distancia) {
		posicao += distancia;
		console.log(this.nome, 'andou ', distancia, 'metros');
	};
}

//A palavra new cria um objeto vazio e o this faz referência ao objeto recém criado
const peter = new Cachorro('Peter');
const miles = new Cachorro('Miles');

console.log(peter);
console.log(miles);
peter.latir();
peter.andar(5);

//Rest operator
/*Diferente do spread operator que distribuí um array em elementos separados, o rest operator 
agrupa o restante de valores específicos em um array*/
function restOperator(numero1, numero2, ...numeros) {
	console.log(numero1);
	console.log(numero2);
	console.log(numeros);
	console.log(typeof numeros);
}
restOperator(1, 2, 3, 4, 5);
