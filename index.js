//declarting initial varibales. 
let userHp = 40;
let grantHp = 10;
let userWin = 0

//user inputs to start the game. 
const playGame = prompt ("Would you like to play a game against The Almighty Grant?");

//function to track user's wins. 
function wins() {
  userWin++; 
}

// function to create random 1 or 2.
function subtract(hP) {
  hP -= (Math.floor(Math.random()* 2) + 1);
  return hP;
}

//Determines whether to run the game. 
if (playGame === "yes" || playGame === "Yes" || playGame === "YES") {
  //Asks user for their name to use in the game.
  const userName = prompt ("Please enter your name.");

  //Game logic starts. 
  while (userHp <= 40 && grantHp <=10 ) {
  userHp = subtract(userHp);
  grantHp = subtract(grantHp);

  //log the progress of the iteration
  console.log (`${userName} has ${userHp} points.`);
  console.log (`The Almighty Grant has ${grantHp} points`);

  //adds one to the user's total wins.
  if (grantHp <= 0 && userHp > 0) {
    wins(userWin);
    grantHp = 10;
    console.log (userWin);
  }  
  
  //if grant hits 0 points 3 times and user still has points, user wins and game ends.
  if (userHp > 0 && userWin === 3){ 
    console.log(`Congratulations ${userName}, you won againt The Alimghty Grant!`);
    alert (`Congratulations ${userName}, you won againt The Alimghty Grant!`);
    break;
    } 
    //if user hits 0 points one time, grant wins and game ends. 
    else if (grantHp > 0 && userHp <= 0) {
      console.log("Sorry, The Almighty Grant wins.");
      alert ("Sorry, The Almighty Grant wins.");
      break;
        }
}
}
else if (playGame === "no" || playGame === "No" || playGame === "NO") {
  console.log("I'm sorry to hear that, maybe next time.");
  alert ("I'm sorry to hear that, maybe next time.");
}


