//class

class player{

    score = 0;
    
    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

const player1 = new player();
const player2 = new player();

player1.score += 1;
player2.score += 4;

console.log("Player 1 scored:",player1.score);
console.log("Player 2 scored:",player2.score);

player1.pause();

player2.exit();