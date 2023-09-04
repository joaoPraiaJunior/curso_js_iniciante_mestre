(function () {
  "use strict";

  const body = document.body;

  function fundoRandomico() {
    const numeroRandomico = parseInt(Math.random() * 5) + 1;
    body.style.backgroundImage = `url(images/${numeroRandomico}.jpg)`;
  }

  setInterval(fundoRandomico, 2000)
})();
