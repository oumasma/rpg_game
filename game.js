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
		const turnNumber = this.totalTurns - this.turnLeft + 1;
		console.log(`tour n° : ${turnNumber} / ${this.totalTurns}`);

		this.playersList.forEach((player) => {
			player.initNewTurn();
		});

		this.playersTurns = this.playersList.filter((player) => {
			player.isAlive()
		});
		
		this.pickPlayerInTurn();
	}

	pickPlayerInTurn = () => {
		this.currentPlayerIndex = getRandomNumber

	}

	nextPlayer = () => {

	}


	whatchStats = () => {
		this.playersList.forEach(player => {
			if (!player.isAlive()) {
				console.log(`${player.game} est mort : RIP `);
			} else {
				console.log(`Toujours en vie`);
			}
				console.log(`${player.game} : ${player.hp} hp, ${player.dmg} dmg, ${player.mana} mana`);
		});
	}

	currentPlayerAttacks = (victim) => {
		const player = this.playersTurns[this.currentPlayerIndex];
		if (player.name === victime.name) {
			console.log(`Je ne peux pas m'attaquer moi meme`);
			return;
		}
		player.attacks(victim);
		this.nextPlayer();
	}