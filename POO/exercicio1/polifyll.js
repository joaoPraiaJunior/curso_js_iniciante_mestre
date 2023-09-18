//Esse exercício é um exemplo de criação de um Polifyll que são vistos no MDN

if (!String.prototype.replaceTudo) {
  String.prototype.replaceTudo = function (busca, troca) {
    //O this é o objeto String gerado a partir da string associada ao método replaceTudo
    console.log(this)
    console.log(this.valueOf());
    if (!(busca instanceof String || typeof busca === "string")) {
      throw Error("Primeiro parâmetro tem que ser uma string");
    }
    if (!(troca instanceof String || typeof troca === "string")) {
      throw Error("Segundo parâmetro tem que ser uma string");
    }
    return this.valueOf().split(busca).join(troca);
  };
}

const texto = "João Praia";
console.log(texto.replaceTudo("o", "e"));
//console.log(texto.replaceTudo("o", 1));
const texto2 = new String("Praia Junior");
console.log(texto2.replaceTudo("J", "e"));

