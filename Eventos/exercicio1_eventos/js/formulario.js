(function () {
  "use strict";

  const elementos = {
    formulario: "#shopping-add",
    campoTitulo: "#txtTitulo",
    compoDescricao: "#txtDescricao",
    contadorDeCaracteres: "#contador",
    campoCheckBox: "#chkAceito",
    botaoDoFormulario: "#btn",
    mensagemDeFeedback: "#feedbackMessage",
    botaoDeRemoverMensagemFeedback: "#botao-remover",
  };

  const formulario = document.querySelector(`${elementos.formulario}`);
  const campoTitulo = document.querySelector(`${elementos.campoTitulo}`);
  const campoDescricao = document.querySelector(`${elementos.compoDescricao}`);
  const contadorDeCaracteres = document.querySelector(
    `${elementos.contadorDeCaracteres} > span`
  );
  const campoCheckBox = document.querySelector(`${elementos.campoCheckBox}`);
  const botaoDoFormulario = document.querySelector(
    `${elementos.botaoDoFormulario}`
  );
  const mensagemDeFeedback = document.querySelector(
    `${elementos.mensagemDeFeedback}`
  );
  const botaoDeRemoverMensagemFeedback = document.querySelector(
    `${elementos.botaoDeRemoverMensagemFeedback}`
  );

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    validaCamposDoFormulario();
  });

  function validaCamposDoFormulario() {
    if (!campoTitulo.value) {
      mostraMensagemDeErro("campo título vazio", function () {
        campoTitulo.focus();
      });
    } else if (!campoDescricao.value) {
      mostraMensagemDeErro("Campo descrição vazio", function () {
        campoDescricao.focus();
      });
    }
  }

  contadorDeCaracteres.style.display = "inline-block";
  const numeroMaximoDoContador = campoDescricao.getAttribute("maxlength");
  setaQuantidadeDeCaracteresDoContador(numeroMaximoDoContador);

  campoDescricao.addEventListener("input", contadorDecaracteresDoCampo);

  function contadorDecaracteresDoCampo() {
    let caracteresDigitadosNoInput =
      parseInt(numeroMaximoDoContador) -
      parseInt(campoDescricao.value.length);
    setaQuantidadeDeCaracteresDoContador(caracteresDigitadosNoInput);
  }

  function setaQuantidadeDeCaracteresDoContador(numeroDeCaracteresDoContador) {
    contadorDeCaracteres.textContent = numeroDeCaracteresDoContador;
  }

  botaoDoFormulario.setAttribute("disabled", "");

  campoCheckBox.addEventListener("change", desabilitaBotaoDoFormulario);

  function desabilitaBotaoDoFormulario() {
    botaoDoFormulario.disabled = !campoCheckBox.checked;
  }

  function mostraMensagemDeErro(mensagem, funcaoDeCallback) {
    mensagemDeFeedback.classList.add("show");
    mensagemDeFeedback.querySelector("p").textContent = mensagem;

    botaoDeRemoverMensagemFeedback.focus();

    function removerMensagemFeedback() {
      mensagemDeFeedback.classList.remove("show");

      botaoDeRemoverMensagemFeedback.removeEventListener(
        "click",
        removerMensagemFeedback
      ); //O remove listener foi adicionado para não ficar colocando evento repedidas vezes no botão de fechamento.
      botaoDeRemoverMensagemFeedback.removeEventListener(
        "keyup",
        apertarBotaoDeEscParaFecharMensagemDeErro
      );
      if (typeof funcaoDeCallback === "function") funcaoDeCallback();
    }

    function apertarBotaoDeEscParaFecharMensagemDeErro(evento) {
      if (evento.keyCode === 27) { 
        removerMensagemFeedback();
      }
    }

    botaoDeRemoverMensagemFeedback.addEventListener(
      "click",
      removerMensagemFeedback
    );

    botaoDeRemoverMensagemFeedback.addEventListener(
      "keyup",
      apertarBotaoDeEscParaFecharMensagemDeErro
    );
  }
})();
