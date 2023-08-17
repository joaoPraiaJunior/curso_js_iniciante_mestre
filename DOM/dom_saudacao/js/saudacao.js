(function () {
  "use strict";
  const nomeUsuario = "João";
  const elementoHeader = document.querySelector(".hero");

  if (nomeUsuario) {
    const elementoDiv = document.createElement("div");
    const elementoParagrafo = document.createElement("p");
    const elementoStrong = document.createElement("strong");
    elementoDiv.className = "top-bar";
    elementoParagrafo.textContent = `Bem-vindo(a), `;
    elementoStrong.textContent = `${nomeUsuario}`;
    elementoParagrafo.appendChild(elementoStrong);
    elementoDiv.appendChild(elementoParagrafo);

    elementoHeader.insertBefore(elementoDiv, elementoHeader.firstElementChild);
    // aqui está pegando o o lemento de referencia para inserir antes do primeiro filho do elemento de referencia
  }
})();

//para remover elementos do JS pode utilizar o elemento.removechild(elemento) pode-se colocar caso seja uma li, por exemplo, firstElementChild para remover o primeiro elemento da lista
