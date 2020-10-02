const grace = new Fighter('Grace');
const carl = new Assassin('Carl');
const ulder = new Paladin('Ulder');
const draven = new Berzerker('Draven');
const moana = new Monk('Moana');

const game = new Game();
game.addPlayer(ulder);
game.addPlayer(grace);
game.addPlayer(draven);
game.addPlayer(moana);
game.addPlayer(carl);

game.startGame();



