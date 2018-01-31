//INTRO

alert("Welcome to Rock Paper Scissors: Sparta Edition!");

var play_choice = prompt("Would you like to play?: (1)Yes! (2)No.");

if(play_choice == 1){
  alert("Nice, let's play!")
} else {
  alert("Oh. okay...")
  throw "Game Over.";
};

alert("Alright, it's time to choose your weapon...");

//var CPU_choice = ["Rock", "Paper", "Scissors"]

var loopCounter = userScore = cpuScore = 0;

while(cpuScore < 3 && userScore < 3) {

    var rand = Math.floor(Math.random() * 3);
    var rps_choice = prompt("You want to choose: (1)Rock (2)Paper (3)Scissors");

    switch (rps_choice) {
      case "1":
      case "Rock":

        if (rand == 1) {
          alert("CPU CHOSE PAPER. YOU LOSE, TOUGH LUCK!!");
          cpuScore++;
        } else if (rand == 2) {
          alert("CPU CHOSE SCISSORS. YOU WIN, YOU CHAMPION!!");
          userScore++;
        } else {
           alert("CPU CHOSE ROCK. YOU DRAW, GO AGAIN!!");
        }

        break;

      case "2":
      case "Paper":
        if (rand == 0) {
          alert("CPU CHOSE ROCK. YOU WIN, YOU CHAMPION!!");
          userScore++;
        } else if (rand == 1) {
          alert("CPU CHOSE PAPER. YOU DRAW, GO AGAIN!!");
        } else {
          alert("CPU CHOSE SCISSORS. YOU LOSE, TOUGH LUCK!!");
          cpuScore++;
        }
        break;

      case "3":
      case "Scissors":

        if (rand == 0) {
          alert("CPU CHOSE ROCK. YOU LOSE, TOUGH LUCK!!");
          cpuScore++;
        } else if (rand == 1) {
          alert("CPU CHOSE PAPER. YOU WIN, YOU CHAMPION!!");
          userScore++;
        } else {
          alert("CPU CHOSE SCISSORS. YOU DRAW, GO AGAIN!!");
        }
        break;
    }

  alert("CPU score: "+cpuScore+"\nYour score: "+userScore+"");

  if(loopCounter>20)
    break;

}

if(userScore>cpuScore) {
  alert("WE HAVE A WINNER, AND THAT WINNER IS YOU!! YOU WIN! TAKE THE W!");
} else if (cpuScore>userScore) {
    alert("WE HAVE A WINNER, AND THAT WINNER IS...not you. You Lose. Hold that L.");
  }
