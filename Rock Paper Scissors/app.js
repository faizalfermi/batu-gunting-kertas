const startGameBtn = document.getElementById('start-game-btn');

const BATU = 'BATU';
const GUNTING = 'GUNTING';
const KERTAS = 'KERTAS';
const DEFAULT_USER_CHOICE = BATU;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

function getPlayerChoice() {
  const selection = prompt(`${BATU}, ${GUNTING}, or ${KERTAS}`, '').toUpperCase();
  if(selection !== BATU && selection !== GUNTING && selection !== KERTAS) {
    alert(`Input yang dimasukkan salah, saya akan memilihkan ${DEFAULT_USER_CHOICE} untukmu`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}


function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return BATU;
  } else if(randomValue < 0.67) {
    return KERTAS;
  } else {
    return GUNTING;
  }
}

const getWinners = (cChoice, pChoice) => 
  // Ternary Operator Version 
  cChoice === pChoice ? RESULT_DRAW :
  (cChoice === BATU && pChoice === KERTAS) ||
  (cChoice === KERTAS && pChoice === GUNTING) ||
  (cChoice === GUNTING && pChoice === BATU)
  ? RESULT_PLAYER_WINS
  : RESULT_COMPUTER_WINS;
  
  // {
  //   if (cChoice === pChoice){
  //   return RESULT_DRAW;
  // } 
  // // // VERSI MUDAH
  // else if (
  //   (cChoice === KERTAS && pChoice === BATU) || 
  //   (cChoice === BATU && pChoice === GUNTING) || 
  //   (cChoice === GUNTING && pChoice === KERTAS)
  // ) {
  //   return RESULT_COMPUTER_WINS;
  // } else {
  //   return RESULT_PLAYER_WINS;
  // }
  // // VERSI NGERIBETIN
  //   // else if (pChoice === KERTAS && cChoice === BATU) {
  //   //   return RESULT_PLAYER_WINS;
  //   // } else if (pChoice === BATU && cChoice === GUNTING) {
  //   //     return RESULT_PLAYER_WINS;
  //   //   } else if (pChoice === GUNTING && cChoice === KERTAS){
  //   //       return RESULT_COMPUTER_WINS;
  //   // } else if (cChoice === KERTAS && pChoice === BATU) {
  //   //     return RESULT_COMPUTER_WINS;
  //   // } else if (cChoice === BATU && pChoice === GUNTING) {
  //   //     return RESULT_COMPUTER_WINS;
  //   // } else if (cChoice === GUNTING && pChoice === KERTAS){
  //   //     return RESULT_PLAYER_WINS;
  //   //   }
  //   }

function start() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Playing Game~!');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winners = getWinners(playerChoice, computerChoice);
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(winners);
  let message = `Kamu memilih ${playerChoice} dan komputer memilih ${computerChoice} jadi kamu `;
  if (winners === RESULT_DRAW) {
    message += 'Seri!';
  } else if (winners === RESULT_PLAYER_WINS) {
    message += 'Menang!';
  }else {
    message += 'Kalah!';
  }
  alert(message);
  gameIsRunning = false;
}

startGameBtn.addEventListener('click', start);
