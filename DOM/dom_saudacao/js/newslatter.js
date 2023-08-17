(function () {
  "use strict";
  const campoEmail = document.getElementById("txtEmail");
  const botaoNewslatter = document.getElementById("btn");
  const campoMensagemDeSucesso = document.getElementById("newsletterFeedback");

  function cadastraEmail() {
    let email = campoEmail.value;
    mensagemSucesso(email);
  }

  function mensagemSucesso(email) {
    campoMensagemDeSucesso.textContent = `O ${email} foi cadastro com sucesso!`;
  }

  botaoNewslatter.addEventListener("click", cadastraEmail, false);
})();
