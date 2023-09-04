(function () {
  "use strict";

  const botaoNewslatter = document.getElementById("btn");
  const campoEmail = document.getElementById("txtEmail");

  function editarCampoDeTexto() {
    campoEmail.removeAttribute("disabled");
    campoEmail.focus();
  }

  function desabilitarCampoEmail() {
    campoEmail.setAttribute('disabled', "");
  }

  botaoNewslatter.addEventListener("click", editarCampoDeTexto, false);
  campoEmail.addEventListener("focusout", desabilitarCampoEmail, false);
})();
