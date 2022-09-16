const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.querySelector('#game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

const handleClick = (event) =>
{
  userChoice = event.target.id;
  userChoiceDisplay.innerText = 'User choice:' + userChoice;
  generateComputerChoice();
getResult();
}

const generateComputerChoice = () =>
{
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerText = 'Computer choice:' + computerChoice;
}

for (let i = 0; i<choices.length;i++)
{
  const button = document.createElement('button');
  //3 button created
  button.id = choices[i];
  // jeder button bekommt id, index0=rock usw.
  button.innerText = choices[i];
  //jeder button mit id kriegt diesen innerText
  button.addEventListener('click', handleClick);
  gameGrid.appendChild(button);
}

const getResult = () =>
{
  switch (userChoice + computerChoice)
  {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerText = "YOU WIN!";
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerText = "YOU LOSE!";
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      resultDisplay.innerText = "ITS A DRAW!";
      break;
  }
}