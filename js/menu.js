var menuState = {
	preload: function() {
		game.load.image('background', 'assets/background.jpg');
		game.load.image('conveyorBelt', 'assets/conveyorBelt.png');
		game.load.image('redBaggageCart', 'assets/redBaggageCart.png');
		game.load.image('blueBaggageCart', 'assets/blueBaggageCart.png');
		game.load.image('greenBaggageCart', 'assets/greenBaggageCart.png');
		game.load.image('yellowBaggageCart', 'assets/yellowBaggageCart.png');
	},
	
	create: function() {

		var gameName = game.add.text(game.world.centerX, 100, 'Scatter Bags', {font: "60px Arial", fill: "#000000", align: "center"});
		var startLabel = game.add.text(game.world.centerX, 200, 'Click anywhere to start', {font: "45px Arial", fill: "#000000", align: "center"});
		var scoreLabel = game.add.text(game.world.centerX, 250, 'View High Scores', {font: "45px Arial", fill: "#000000", align: "center"});

		startLabel.inputEnabled = true;
		scoreLabel.inputEnabled = true;

		startLabel.events.onInputDown.add(start, this);
		scoreLabel.events.onInputDown.add(scores, this);

	},

	onTap: function(pointer, doubleTap) {
		if(!doubleTap) {
			this.addOnce(this.start, this);
		}
	},

	start: function() {
		game.state.start('play');
	}

	scores: function() {
		game.state.start('scores');
	}
};