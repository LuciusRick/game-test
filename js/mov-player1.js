var canvas = document.getElementById('canvas_animacao')
var context = canvas.getContext('2d')

var suguruAttack = new Image()
suguruAttack.src = '../img/suguru-attack.gif'

var posicao = 0 
desenharPersonagem()

function desenharPersonagem(){
    context.clearReact(0, 0, canvas.width, canvas.height)
    context.suguruAttack(posicao, 100, 30, 50)
}

function atualizarPosicao() {
    suguruAttack.style.left = positionX + "px";
    suguruAttack.style.right = positionY + "px";
  }

  function moverParaDireita() {
    positionX += 20;
    atualizarPosicao();
  }

  function moverParaEsquerda() {
    positionX -= 20;
    atualizarPosicao();
  }