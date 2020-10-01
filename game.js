class Game {
    constructor( turnLeft = 10 , gamers = new Array(), status = true) {
        this.turnLeft;
        this.gamers = gamers;
        this.status = status;
    };

    
    initializeGamers = () => {
        let gamer1 = new Fighter();
        let gamer2 = new Assassin();
        let gamer3 = new Monk();
        let gamer4 = new Paladin();
        let gamer5 = new Berzerker();

        this.gamers.push(gamer1, gamer2, gamer3, gamer3, gamer4, gamer5);
        console.log("Voici les joueurs : ", gamersgit);

    };
    /*
    skipTurn = () => { // method lost a tour
        if(turnLeft >= 0) { // 10 > 0
            this.turnLeft -= 1; // turnLetf 9
            console.log(`C'est le Tour n° : ${this.turnLeft}`);
          } else {
            turnLeft = 0; //turnLeft 0
            this.status = "Winne"; // change status player "winner"
            console.log("Fin du game")
          }
    };

    startTurn = (turnLeft) => { //chaque tour = starTurn
        if(turnLeft >= 0) {
            this.turnLeft -= 1;
            console.log(`C'est le Tour n° : ${this.turnLeft}`);
          } else {
            turnLeft = 0;
            console.log(startTurn)
          }
        
    };*/


};
