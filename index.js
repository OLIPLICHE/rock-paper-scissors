

function game() {
   
    let playerSelection = prompt("Please enter one shape among ROCK, PAPER SCISSORS");
 
    computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
  
 
  function computerPlay(playerSelection, computerSelection) {
               
     if (computerSelection === 'rock ' && playerSelection === 'paper') {
        return "You won " +  playerSelection + " beats "  +  computerSelection;
      }
    
     if (computerSelection === 'rock' && playerSelection === 'scissors') {
     return "You Lost " +  computerSelection + " beats "  +  playerSelection;
     }
    
     if (computerSelection === 'paper' && playerSelection === 'scissors') {
     return "You won " +  playerSelection + " beats "  +  computerSelection;
        }
 
     if (computerSelection === 'paper' && playerSelection === 'rock') {               
     return "You Lost " +  computerSelection + " beats "  +  playerSelection;
        }
   
     if (computerSelection === 'scissors' && playerSelection === 'paper') {               
     return "You Lost " +  computerSelection + " beats "  +  playerSelection;
        }
 
     if (computerSelection === 'scissors' && playerSelection === 'rock') {               
     return "You won " +  playerSelection + " beats "  +  computerSelection;
      }
      if (computerSelection === playerSelection) {
         return "Game is tied. Please replay to break the tie"
      }
 } 
     console.log(computerPlay(playerSelection, computerSelection));
}
 
 game(); 