const personagem = document.getElementById("player");
  let positionX = 0;
  let jumping = false;

  function atualizarPosicao() {
    personagem.style.left = positionX + "px";
  }

  function moverParaDireita() {
    positionX += 10;
    atualizarPosicao();
  }

  function moverParaEsquerda() {
    positionX -= 10;
    atualizarPosicao();
  }

  function pular() {
    if (!jumping) {
      jumping = true;
      let jumpHeight = 0;
      const jumpInterval = setInterval(() => {
        jumpHeight += 5;
        personagem.style.bottom = jumpHeight + "px";
        if (jumpHeight >= 10) {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            jumpHeight -= 5;
            personagem.style.bottom = jumpHeight + "px";
            if (jumpHeight <= 0) {
              personagem.style.bottom = "0";
              clearInterval(fallInterval);
              jumping = false;
            }
          }, 20);
        }
      }, 20);
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "d") {
      moverParaDireita();
    } else if (event.key === "a") {
      moverParaEsquerda();
    } else if (event.key === "w") {
      pular();
    }
  });



