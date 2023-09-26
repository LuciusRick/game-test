const personagem = document.getElementById("player");
  let positionX = 0;
  let positionY = 0;
  let jumping = false;

  function atualizarPosicao() {
    personagem.style.left = positionX + "px";
    personagem.style.right = positionY + "px";
  }

  function moverParaDireita() {
    positionX += 20;
    atualizarPosicao();
  }

  function moverParaEsquerda() {
    positionX -= 20;
    atualizarPosicao();
  }

  function pular() {
    if (!jumping) {
      jumping = true;
      let jumpHeight = 0;
      const jumpInterval = setInterval(() => {
        jumpHeight += 10;
        personagem.style.bottom = jumpHeight + "px";
        if (jumpHeight >= 10) {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            jumpHeight -= 10;
            personagem.style.bottom = jumpHeight + "px";
            if (jumpHeight <= 0) {
              personagem.style.bottom = "70px";
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
    } else if (event.key === "d" + "a") {
      pular(), moverParaDireita();
    } 
  });

  // Função para selecionar um personagem
  function selectCharacter(characterDiv) {
    const characterName = characterDiv.getAttribute("data-character");

    // Verifica qual jogador está selecionando o personagem
    if (!player1SelectedCharacter) {
        player1SelectedCharacter = characterName;
        document.getElementById("player1-character").src = `${characterName}-full-body.jpg`;
    } else if (!player2SelectedCharacter) {
        player2SelectedCharacter = characterName;
        document.getElementById("player2-character").src = `${characterName}-full-body.jpg`;
    }
}

// Adicione um ouvinte de eventos a cada div de personagem
const characterDivs = document.querySelectorAll(".character");

characterDivs.forEach((characterDiv) => {
    characterDiv.addEventListener("click", () => {
        selectCharacter(characterDiv);
    });
});


