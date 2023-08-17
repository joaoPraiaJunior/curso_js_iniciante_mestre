(function () {
  const nomeUsuario = "João";
  const elementoHeader = document.querySelector(".hero");

  if (nomeUsuario) {
    const elementoDiv = document.createElement("div");
    const elementoParagrafo = document.createElement("p");
    const elementoStrong = document.createElement("strong");
    elementoDiv.className = "top-bar";
    elementoParagrafo.textContent = `Bem-vindo(a), `;
    elementoStrong.textContent = `${nomeUsuario}`;
    elementoParagrafo.appendChild(elementoStrong)
    elementoDiv.appendChild(elementoParagrafo)

    elementoHeader.insertBefore(elementoDiv, elementoHeader.firstElementChild);
  }
})();
