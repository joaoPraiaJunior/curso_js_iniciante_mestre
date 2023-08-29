(function () {
  "use strict";

  //Armazenar o DOM em variáveis

  const elementos = {
    formulario: "#todo-add",
    listaDeTarefas: "#todo-list",
    itensDalista: ".todo-item",
  };

  const formulario = document.querySelector(`${elementos.formulario}`);
  const listaDeTarefas = document.querySelector(`${elementos.listaDeTarefas}`);
  //const itensDalista = document.querySelectorAll(`${elementos.itensDalista}`);

  const itensDalista = [
    {
      nome: "Tarefa 1",
      dataDeCriacao: Date.now(),
      completa: false,
    },
  ];

  function adicionaTarefaNaLista(evento) {
    evento.preventDefault();
    itensDalista.push({
      nome: formulario.tarefa.value,
      dataDeCriacao: Date.now(),
      completa: false,
    });
    formulario.tarefa.value = "";
    formulario.tarefa.focus();
    redenrizacaoDeTarefas(); //Chama a função aqui para atualizar o objeto para printar na tela
  }

  function redenrizacaoDeTarefas() {
    listaDeTarefas.innerHTML = "";
    itensDalista.forEach((itemDaLista) => {
      listaDeTarefas.appendChild(criarItemDeTarefa(itemDaLista));
    });
  }

  function criarItemDeTarefa(tarefa) {
    // listaDeTarefas.innerHTML += `
    // <li class="todo-item">
    //     <p class="task-name">${tarefa}</p>
    // </li>`; se usar esse meétodo, ele vai limpar o DOM e a escuta de eventos vão desaparecer

    const item = document.createElement("li");
    const paragrafo = document.createElement("p");
    const botaoDeCompletarTarefa = document.createElement("button");
    const iconeDechecagem = document.createElement("i");
    const botaoDeEditarItem = document.createElement("i");
    const botaoDeDeletarItem = document.createElement("i");
    const containerDeEdicao = document.createElement("div");
    const campoDeEdicao = document.createElement("input");
    const botaoDeEnviarItemEditado = document.createElement("button");
    const botaoDeCancelarEdicao = document.createElement("button");

    item.className = "todo-item";
    paragrafo.className = "task-name";
    botaoDeCompletarTarefa.className = "button-check";
    iconeDechecagem.className = "fas fa-check displayNone";
    botaoDeEditarItem.className = "fas fa-edit";
    botaoDeDeletarItem.className = "fas fa-trash-alt";
    containerDeEdicao.className = "editContainer";
    campoDeEdicao.className = "editInput";
    botaoDeEnviarItemEditado.className = "editButton";
    botaoDeCancelarEdicao.className = "cancelButton";

    botaoDeCompletarTarefa.setAttribute("type", "submit");
    botaoDeCompletarTarefa.setAttribute("data-js", "completar");
    botaoDeEditarItem.setAttribute("data-js", "editar");
    botaoDeDeletarItem.setAttribute("data-js", "deletar");
    campoDeEdicao.setAttribute("type", "text");
    botaoDeEnviarItemEditado.setAttribute("data-js", "enviar");
    botaoDeCancelarEdicao.setAttribute("data-js", "cancelar");

    paragrafo.textContent = tarefa.nome;
    botaoDeEnviarItemEditado.textContent = "Enviar";
    botaoDeCancelarEdicao.textContent = "Cancelar";

    botaoDeCompletarTarefa.appendChild(iconeDechecagem);

    containerDeEdicao.appendChild(campoDeEdicao);
    containerDeEdicao.appendChild(botaoDeEnviarItemEditado);
    containerDeEdicao.appendChild(botaoDeCancelarEdicao);

    item.appendChild(botaoDeCompletarTarefa);
    item.appendChild(paragrafo);
    item.appendChild(botaoDeEditarItem);
    item.appendChild(containerDeEdicao);
    item.appendChild(botaoDeDeletarItem);
    // selecionaItemDaLista(item);
    return item;
  }

  function selecionaItemDaLista(li) {
    // li.addEventListener("click", function (evento) {
    //   console.log(evento.target);
    // });
  }

  function selecionarAcaoNaLista(evento) {
    const selecionarItemParaAcao = evento.target.dataset.js;
    if (!selecionarItemParaAcao) return;

  }
  formulario.addEventListener("submit", adicionaTarefaNaLista);
  listaDeTarefas.addEventListener("click", selecionarAcaoNaLista);

  redenrizacaoDeTarefas();
})();
