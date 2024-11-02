const alunos = [
  {
    _id: 0,
    nome: "chico melato",
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [2, 2, 3, 3],
      ciencias: [3, 3, 3, 3],
    },
  },
  {
    _id: 1,
    nome: "talita lima",
    notas: {
      portugues: [4, 4, 4, 4],
      matematica: [4, 4, 5, 5],
      historia: [5, 5, 6, 6],
      ciencias: [7, 7, 8, 9],
    },
  },
];

//Cria um objeto media para todas as matérias
alunos.forEach((aluno) => {
  aluno.media = {};

  for (let materia in aluno.notas) {
    aluno.media[materia] = calculaAMediaDasNotas(...aluno.notas[materia]);
  }
});

//Criar a tr do thead
const trDoCabecalho = document.createElement("tr");
const cabecalhoDaTabela = document.querySelector("table > thead");
trDoCabecalho.innerHTML = `<td>Nome</td>`;

let tdDasMaterias = Object.keys(alunos[0].notas)
  .map((materia) => {
    console.log(materia);
    return `<td>${corrigeAcentuacao(materia)}</td>`;
  })
  .join("");

trDoCabecalho.innerHTML += tdDasMaterias;
cabecalhoDaTabela.appendChild(trDoCabecalho);

function corrigeAcentuacao(materia) {
  const disciplinas = {
    portugues: "Português",
    matematica: "Matemática",
    historia: "História",
    ciencias: "Ciências",
  };

  return disciplinas[materia];
}

//Percorrer cada aluno e gerar m html para incluir no tbody
const tbodyDaTabela = document.querySelector("table > tbody");

alunos.forEach((aluno) => {
  const trDoCorpoDaTabela = document.createElement("tr");
  let tdsDasTrsDoCorpoDaTabela = `<td>${aluno.nome}</td>`;
  Object.keys(aluno.media).forEach((disciplina) => {
    tdsDasTrsDoCorpoDaTabela += `<td>${aluno.media[disciplina]}</td>`;
  });

  trDoCorpoDaTabela.innerHTML = tdsDasTrsDoCorpoDaTabela;
  tbodyDaTabela.appendChild(trDoCorpoDaTabela);
});
