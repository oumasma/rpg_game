class Game {

	totalTurns = 10;
	turnLeft = 10;
	playersList = [];
	playersTurns = [];
	currentPlayerIndex = 0;

	startGame = () => {
		this.startTurn();
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}

	startTurn = () => {
		console.log('-----');
		const turnNumber = this.totalTurns - thi.turnLeft + 1;
		console.log(`tour n° : ${turnNumber} / ${this.totalTurns}`);

		this.playersList.forEach((player) => {
			player.initNewTurn();
		});

		this.playersTurns = [...this.playersList];
		this.pickPlayerInTurn();
	}

	pickPlayerInTurn = () => {
		this.currentPlayerIndex = getRandomNumber

	}

	nextPlayer = () => {

	}
}