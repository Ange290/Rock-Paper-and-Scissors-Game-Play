const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Error!');
  }
}
function getComputerChoice(){
 
  switch(Math.floor(Math.random() *3 )){
    case 0:
      return  'rock';
      break;
        case 1:
      return  'paper';
      break;
          case 2:
      return  'scissors';
      break;
   
  };
}
 function determineWinner(userChoice,computerChoice){
   
   if(userChoice === computerChoice){
     return 'This game is tie!';
   }
   if(userChoice === 'rock'){
     if(computerChoice === 'paper'){
     return 'Computer won !';
       
     }
     else{
       return 'You won !';
     }
     }
   if(userChoice === 'paper'){
     if(computerChoice === 'scissors'){
       return 'Computer won !';
       }
     else{
       return 'You won !';
     }
   }
   if(userChoice === 'scissors'){
     if(computerChoice === 'rock'){
       return 'Computer won !';
     }
     else{
       return 'You won !';
     }
   }
   if(userChoice === 'bomb'){
     return 'You won !';
   }
 }
   
function playGame(){
  const userChoice = getUserChoice ('rock');
  const computerChoice = getComputerChoice ();
  console.log('You threw :' +userChoice);
  console.log('The computer threw :'+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
