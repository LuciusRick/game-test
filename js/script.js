// Variáveis globais para armazenar informações do jogo
let currentPlayer;
let opponentPlayer;
let currentPlayerHealth = 100;
let opponentPlayerHealth = 100;

function togglePersonaImage() {
    // Obtém a referência para a div "persona-image"
    const personaImageDiv = document.getElementById("persona-image");

    // Obtém o estilo atual da div "persona-image"
    const currentDisplayStyle = getComputedStyle(personaImageDiv).display;

    // Alterna entre "block" e "none" com base no estilo atual
    if (currentDisplayStyle === "none") {
        personaImageDiv.style.display = "block";
    } else {
        personaImageDiv.style.display = "none";
    }
}

function togglePersonaAd() {
    // Obtém a referência para a div "persona-image"
    const personaImageDiv = document.getElementById("persona-imagead");

    // Obtém o estilo atual da div "persona-image"
    const currentDisplayStyle = getComputedStyle(personaImageDiv).display;

    // Alterna entre "block" e "none" com base no estilo atual
    if (currentDisplayStyle === "none") {
        personaImageDiv.style.display = "block";
    } else {
        personaImageDiv.style.display = "none";
    }
}




const suguru = document.querySelector('#suguru-sprite');

