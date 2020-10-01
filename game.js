class Game {
    constructor(turnLeft = 10, gamers = new Array(), status = true) {
        this.turnLeft = turnLeft;
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
    console.log("Voici les joueurs : ", gamers);

};
};
