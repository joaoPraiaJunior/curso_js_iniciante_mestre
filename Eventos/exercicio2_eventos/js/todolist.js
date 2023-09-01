(function () {
  "use strict";

  //Armazenar o DOM em variáveis

  const elementos = {
    formulario: "#todo-add",
    listaDeTarefas: "#todo-list",
    itensDalista: "todo-item",
    boxDeEdicao: ".editContainer",
    campoDeEdicao: ".editInput",
    iconeDechecagem: ".fa-check",
  };

  const formulario = document.querySelector(`${elementos.formulario}`);
  const listaDeTarefas = document.querySelector(`${elementos.listaDeTarefas}`);
  const itensDaLista = document.getElementsByClassName(
    `${elementos.itensDalista}`
  );

  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();
  const dataAtual = `${dia} / ${mes} / ${ano}`;

  const objetoDeItensDalista = pegaOsDadosSalvos();

  function pegaOsDadosSalvos() {
    let dadosDasTarefas = localStorage.getItem("tarefas");
    dadosDasTarefas = JSON.parse(dadosDasTarefas);

    return dadosDasTarefas && dadosDasTarefas.length
      ? dadosDasTarefas
      : [
          {
            nome: "Tarefa 1",
            dataDeCriacao: dataAtual,
            completa: false,
          },
        ];
  }

  function setarNovosDados() {
    localStorage.setItem("tarefas", JSON.stringify(objetoDeItensDalista));
  }

  setarNovosDados();

  function adicionaTarefaNaLista(evento) {
    evento.preventDefault();
    objetoDeItensDalista.push({
      nome: formulario.tarefa.value,
      dataDeCriacao: dataAtual,
      completa: false,
    });
    formulario.tarefa.value = "";
    formulario.tarefa.focus();
    redenrizacaoDeTarefas(); //Chama a função aqui para atualizar o objeto para printar na tela
    setarNovosDados();
  }

  function redenrizacaoDeTarefas() {
    listaDeTarefas.innerHTML = "";
    objetoDeItensDalista.forEach((itemDaLista) => {
      listaDeTarefas.appendChild(criarItemDeTarefa(itemDaLista));
    });
  }

  function criarItemDeTarefa(tarefa) {
    // listaDeTarefas.innerHTML += `
    // <li class="todo-item">
    //     <p class="task-name">${tarefa}</p>
    // </li>`; se usar esse método, ele vai limpar o DOM e a escuta de eventos vão desaparecer

    const item = document.createElement("li");
    const paragrafo = document.createElement("p");
    const dataDaTarefa = document.createElement("time");
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
    dataDaTarefa.className = "task-data";
    botaoDeCompletarTarefa.className = "button-check";
    iconeDechecagem.className = `fas fa-check ${
      tarefa.completa === false ? "displayNone" : ""
    }`;
    botaoDeEditarItem.className = "fas fa-edit";
    botaoDeDeletarItem.className = "fas fa-trash-alt";
    containerDeEdicao.className = "editContainer";
    campoDeEdicao.className = "editInput";
    botaoDeEnviarItemEditado.className = "editButton";
    botaoDeCancelarEdicao.className = "cancelButton";

    botaoDeCompletarTarefa.setAttribute("type", "submit");
    botaoDeCompletarTarefa.setAttribute("data-js", "completar");
    iconeDechecagem.setAttribute("data-js", "completar");
    botaoDeEditarItem.setAttribute("data-js", "editar");
    botaoDeDeletarItem.setAttribute("data-js", "deletar");
    campoDeEdicao.setAttribute("type", "text");
    botaoDeEnviarItemEditado.setAttribute("data-js", "enviar");
    botaoDeCancelarEdicao.setAttribute("data-js", "cancelar");

    paragrafo.textContent = tarefa.nome;
    dataDaTarefa.textContent = tarefa.dataDeCriacao;
    campoDeEdicao.value = tarefa.nome;
    botaoDeEnviarItemEditado.textContent = "Enviar";
    botaoDeCancelarEdicao.textContent = "Cancelar";

    paragrafo.appendChild(dataDaTarefa);
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

    let itemAtual = evento.target;

    while (itemAtual.nodeName !== "LI") {
      itemAtual = itemAtual.parentElement;
    }

    const indexDoItemAtual = [...itensDaLista].indexOf(itemAtual);
    const boxDeEdicao = itemAtual.querySelector(`${elementos.boxDeEdicao}`);
    const campoDeEdicao = itemAtual.querySelector(`${elementos.campoDeEdicao}`);
    const todosBoxesDeEdicao = listaDeTarefas.querySelectorAll(
      `${elementos.boxDeEdicao}`
    );
    const iconeDechecagem = itemAtual.querySelector(
      `${elementos.iconeDechecagem}`
    );

    const acaoselecionada = {
      completar: function () {
        objetoDeItensDalista[indexDoItemAtual].completa =
          !objetoDeItensDalista[indexDoItemAtual].completa;

        if (objetoDeItensDalista[indexDoItemAtual].completa) {
          iconeDechecagem.classList.remove("displayNone");
        } else {
          iconeDechecagem.classList.add("displayNone");
        }

        setarNovosDados();
      },
      editar: function () {
        todosBoxesDeEdicao.forEach((boxes) => {
          boxes.style.display = "none";
        });
        boxDeEdicao.style.display = "flex";
        campoDeEdicao.focus();
      },

      deletar: function () {
        objetoDeItensDalista.splice(indexDoItemAtual, 1);
        redenrizacaoDeTarefas(); //Essa abordagem ela é mais custosa, porém ela é essêncial
        //itemAtual.remove(); //Essa abordagem não é CrossBrowser
        //itemAtual.parentElement.removeChild(itemAtual) //Essa abordagem é crossBrowser
        setarNovosDados();
      },
      enviar: function () {
        objetoDeItensDalista[indexDoItemAtual].nome = campoDeEdicao.value;
        redenrizacaoDeTarefas();
        setarNovosDados();
      },
      cancelar: function () {
        boxDeEdicao.removeAttribute("style");
      },
    };

    if (acaoselecionada[selecionarItemParaAcao]) {
      acaoselecionada[selecionarItemParaAcao]();
    }
  }
  formulario.addEventListener("submit", adicionaTarefaNaLista);
  listaDeTarefas.addEventListener("click", selecionarAcaoNaLista);

  redenrizacaoDeTarefas();
})();
