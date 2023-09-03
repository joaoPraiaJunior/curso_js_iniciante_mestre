function formatarNome(nome) {
  nome = nome.trim();
  let primeiroEspaco = nome.indexOf(" ");
  if (primeiroEspaco < 0) {
    return nome;
  }

  let primeiroNome = nome.slice(0, primeiroEspaco);
  let sobreNomes = nome.slice(primeiroEspaco + 1);

  return `${sobreNomes}, ${primeiroNome}`;
}

console.log(formatarNome("João"));
console.log(formatarNome("João Praia"));
console.log(formatarNome("João Praia Junior"));

console.log("---------------------------")

function formatarNomeComSplit(nome) {
  let nomeComoLista = nome.split(" ");
  if (nomeComoLista.length === 1) {
    return nome;
  }
  let primeiroNome = nomeComoLista.shift();
  return `${nomeComoLista.join(" ")}, ${primeiroNome}`
}

console.log(formatarNomeComSplit("João"));
console.log(formatarNomeComSplit("João Praia"));
console.log(formatarNomeComSplit("João Praia Junior"));
