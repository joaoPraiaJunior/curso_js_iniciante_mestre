// Objetos de primeira classe

function fn(callback) {
  console.log("executar acao de callback");
  typeof callback === "function" && callback(); //curto circuito
}

function callback() {
  console.log("funcao passada por parâmetro");
}

fn(callback);

const obj = {
  callback,
};

obj.callback();

function fn2() {
  fn2.count++;
  return function fn3() {
    console.log("objeto de primeira classe");
  };
}

fn2.count = 0; //como uma função é um objeto de primeira classe, pode-se colocar uma propriedade 
const funcao3 = fn2();
funcao3();
console.log(fn2.count);
