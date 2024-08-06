const d = document;
const buttonR = d.querySelector("#rock");
const buttonP = d.querySelector("#paper");
const buttonS = d.querySelector("#scissor");
const contadorH = d.querySelector(".contador-humano");
const contadorR = d.querySelector(".contador-robot");
const message = d.querySelector(".message");
const ganador = d.querySelector(".ganador");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  return Math.floor(Math.random() * 3); // 0: Piedra, 1: Papel, 2: Tijeras
};

const playRound = (human, computer) => {
  switch (true) {
    case human === computer:
      message.textContent = "Empate, ambos eligieron lo mismo";
      break;
    case human === 0 && computer === 2:
      message.textContent = "Ganaste, la piedra le gana a las tijeras";
      humanScore++;
      break;
    case human === 2 && computer === 0:
      message.textContent = "Perdiste, la piedra le gana a las tijeras";
      computerScore++;
      break;
    case human === 0 && computer === 1:
      message.textContent = "Perdiste, el papel le gana a la piedra";
      computerScore++;
      break;
    case human === 1 && computer === 0:
      message.textContent = "Ganaste, el papel le gana a la piedra";
      humanScore++;
      break;
    case human === 1 && computer === 2:
      message.textContent = "Perdiste, las tijeras le ganan al papel";
      computerScore++;
      break;
    case human === 2 && computer === 1:
      message.textContent = "Ganaste, las tijeras le ganan al papel";
      humanScore++;
      break;
  }
  updateScores();
  checkGameOver();
};

const updateScores = () => {
  contadorH.textContent = `Puntos del Humano: ${humanScore}`;
  contadorR.textContent = `Puntos del Robot: ${computerScore}`;
};

const checkGameOver = () => {
  if (humanScore === 5 || computerScore === 5) {
    // Si alguno alcanza 3 victorias, termina el juego
    if (humanScore > computerScore) {
      ganador.textContent = "¡El ganador fuiste tú!";
    } else {
      ganador.textContent = "El ganador fue el robot";
    }
    // Desactiva los botones
    buttonR.disabled = true;
    buttonP.disabled = true;
    buttonS.disabled = true;
  }
};

const handleClick = (choice) => {
  let humanChoice;
  switch (choice) {
    case "rock":
      humanChoice = 0; // Piedra
      break;
    case "paper":
      humanChoice = 1; // Papel
      break;
    case "scissor":
      humanChoice = 2; // Tijeras
      break;
    default:
      return;
  }
  playRound(humanChoice, getComputerChoice());
};

// Configuración de los event listeners
buttonR.addEventListener("click", () => handleClick("rock"));
buttonP.addEventListener("click", () => handleClick("paper"));
buttonS.addEventListener("click", () => handleClick("scissor"));
