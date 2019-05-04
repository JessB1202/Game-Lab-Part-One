let userHp = 40;
let grantHp = 10;
let userWin = 0

//function to track user's wins. 
function wins() {
  userWin++; 
}

// function to create random 1 or 2.
function subtract(hP) {
  hP -= (Math.floor(Math.random()* 2) + 1);
  return hP;
}

//while loop for the game. 
while (userHp <= 40 && grantHp <=10 ) {
  userHp = subtract(userHp);
  grantHp = subtract(grantHp);

  console.log ("Name has " + userHp + " points.");
  console.log ("Grant has " + grantHp + " points.");

  //adds one to the user's total wins.
  if (grantHp <= 0 && userHp > 0) {
    wins(userWin);
    grantHp = 10;
    console.log (userWin);
  }  
  
  //if grant hits 0 points 3 times and user still has points, user wins and game ends.
  if (userHp > 0 && userWin === 3){ 
    console.log("Congratulations Name, you won!");
    break;
    } 
    //if user hits 0 points one time, grant wins and game ends. 
    else if (grantHp > 0 && userHp <= 0) {
      console.log("Sorry, Grant wins.");
      break;
        }
}

