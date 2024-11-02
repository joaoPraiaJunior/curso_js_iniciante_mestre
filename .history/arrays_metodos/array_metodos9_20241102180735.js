// loop for of e loop for in

const arr = [1, 2, 3];
const obj = {
  nome: "joao",
  idade: 37,
  email: "joao@joaopraia.com.br",
};

//looping for in serve para percorrer objetos
for (let prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

//looping for of para percorrer itens de arrays

for (let n of arr) {
  console.log(n);
}
