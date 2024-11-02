/*
1. Criar conta abstrata chamada ContaBancaria   

- cliente   

- numero   

- saldo   

- depositar(valor)   

- sacar(valor)

2. Criar duas classes que herdam de ContaBancaria

- ContaCorrente

    - limite

    - sacar(valor)

  - ContaPoupanca

    - aniversario

    - sacar(valor)

    3. criar classe Cliente e compor as classes concretas

  - nome

  - documento

  4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.

   Pessoa Física tem documento CPF e Juridica tem documento CNPJ

   // Desafio conta bancária
/*
5. Polimorfismo
   criar uma classe especializada em transferir. 
   Essa classe tera um único método execute(contaOrigem, contaDestino, valor). 
   Tanto contaOrigem quanto contaDestino precisam ser instancias de ContaBancaria. 
   Tanto CC quanto CP tem o metodo sacar(), que têm implementações diferentes. 
   Mas como sabemos que contaOrigem e contaDestino possuem o metodo sacar, 
   independente se for CC ou CP podemos chamar esse método.
*/

class ContaBancaria {
	constructor(cliente, numero) {
		//Comando para deixar a classe abstrata
		if (this.constructor === ContaBancaria) {
			throw new Error('Essa classe é abstrata');
		}
		this.cliente = cliente;
		this.numero = numero;
		this.saldo = 0;
	}

	//Get é uma função mas se comporta como uma propriedade
	get dadosDoCliente() {
		//Aqui como na classe o documento foi aproveitado em cnpj e cpf, pode-se chamar o documento sem usar o if...
		return `${this.cliente.nome}, ${this.cliente.tipoDoDocumento}: ${this.cliente.numeroDoDocumento}`;
	}

	depositar(valor) {
		this.saldo += valor;
	}

	sacar() {
		throw new Error('O método sacar precisa ser implementado');
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(cliente, numero) {
		super(cliente, numero);
		this.aniversario = Date.now();
	}
	sacar(valor) {
		let saldoDisponivel = this.saldo;
		if (valor > saldoDisponivel) {
			throw new Error('Saldo insuficiente');
		}

		this.saldo -= valor;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(cliente, numero) {
		super(cliente, numero);
		this.limite = 0;
	}
	sacar(valor) {
		let saldoDisponivel = this.saldo + this.limite;
		if (valor > saldoDisponivel) {
			throw new Error('Saldo insuficiente');
		}

		this.saldo -= valor;
	}
}

class Cliente {
	constructor(nome, tipoDoDocumento, numeroDoDocumento) {
		if (this.constructor === Cliente) {
			throw new Error('Essa classe é abstrata');
		}
		this.nome = nome;
		this.tipoDoDocumento = tipoDoDocumento;
		this.numeroDoDocumento = numeroDoDocumento;
	}
}

class PessoaFisica extends Cliente {
	constructor(nome, numeroDoDocumento) {
		super(nome, 'CPF', numeroDoDocumento);
	}
}

class PessoaJuridica extends Cliente {
	constructor(nome, numeroDoDocumento) {
		super(nome, 'CNPJ', numeroDoDocumento);
	}
}

class Transferir {
	//Polimorfismo, aqui a classe transferir herdou das superClasses ContaBancaria (física e jurídica) os métodos sacar e depositar
	static executarEntreContas(contaOrigem, contaDestino, valor) {
		//Verifica se as contas são instâncias de contaBancaria
		if ((!contaOrigem) instanceof ContaBancaria || (!contaDestino) instanceof ContaBancaria) {
			throw new Error('Contas precisam herdar de ContaBancaria');
		}
		try {
			//Aqui utilizou-se os métodos sacar e depositar. Mesmo que os métodos sejam diferente eles herdam das suas respectivas classes
			contaOrigem.sacar(valor);
			contaDestino.depositar(valor);
		} catch (error) {
			console.log(error);
		}
	}
}

const joao = new PessoaFisica('João', '111.111.222-33');
const maria = new PessoaJuridica('Maria', '55.555.555/0001-55');
//Aqui foi criada uma classe Cliente e ela foi relacionada com as contas poucança e corrente
const cp1 = new ContaPoupanca(joao, 1);
const cp2 = new ContaPoupanca(maria, 2);
const cc1 = new ContaCorrente(maria, 1);

cp1.depositar(1000);
cp2.depositar(5000);
cc1.limite = 1000;
cc1.depositar(3000);
console.log(cp1);
console.log(cp2);
console.log(cc1);

cc1.sacar(400);
console.log(cc1);

console.log(cc1.dadosDoCliente);
console.log(cp1.dadosDoCliente);
console.log(cp2.dadosDoCliente);

//Aqui chamamos a classe e o método para realizar a transferência
Transferir.executarEntreContas(cc1, cp2, 500);
console.log(cc1);
console.log(cp2);

//Transferir.executarEntreContas(cc1, cp2, 3700)

Transferir.executarEntreContas(cp2, cc1, 1000);
console.log(cc1);
console.log(cp2);
