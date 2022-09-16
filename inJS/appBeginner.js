const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => 
{
  userChoice = event.target.id;
  userChoiceDisplay.innerText = ` ${userChoice}`;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice()
{
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1); //variabel für 3, falls noch brunnen oder mehr dazukommen

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerText = computerChoice;
}

function getResult()
{
  if(computerChoice === userChoice)
  {
    result = 'its a draw!';
  }
  if(computerChoice === 'rock' && userChoice === "paper")
  {
    result = 'you win!';
  }
  if(computerChoice === 'rock' && userChoice === "scissors")
  {
    result = 'you lose!';
  }
  if(computerChoice === 'paper' && userChoice === "scissors")
  {
    result = 'you win!';
  }
  if(computerChoice === 'paper' && userChoice === "rock")
  {
    result = 'you lose!';
  }
  if(computerChoice === 'scissors' && userChoice === "rock")
  {
    result = 'you win!';
  }
  if(computerChoice === 'scissors' && userChoice === "paper")
  {
    result = 'you lose!';
  }
  resultDisplay.innerText = result;
}
