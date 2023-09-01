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

  const objetoDeItensDalista = pegaOsDadosSalvos();

  function pegaOsDadosSalvos() {
    let dadosDasTarefas = localStorage.getItem("tarefas");
    dadosDasTarefas = JSON.parse(dadosDasTarefas);

    return dadosDasTarefas && dadosDasTarefas.length
      ? dadosDasTarefas
      : [
          {
            nome: "Tarefa 1",
            dataDeCriacao: Date.now(),
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
      dataDeCriacao: Date.now(),
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
    campoDeEdicao.value = tarefa.nome;
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

    let itemAtual = evento.target;

    while (itemAtual.nodeName !== "LI") {
      itemAtual = itemAtual.parentElement;
    }

    const indexDoItemAtual = [...itensDaLista].indexOf(itemAtual);
    const boxDeEdicao = itemAtual.querySelector(`${elementos.boxDeEdicao}`);
    const campoDeEdicao = document.querySelector(`${elementos.campoDeEdicao}`);
    const todosCamposDeEdicao = listaDeTarefas.querySelectorAll(
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
        todosCamposDeEdicao.forEach((campos) => {
          campos.style.display = "none";
        });
        boxDeEdicao.style.display = "flex";
        campoDeEdicao.focus();

        setarNovosDados();
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
        campoDeEdicao.value = objetoDeItensDalista[indexDoItemAtual].nome;
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
