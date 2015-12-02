var gameMenu=function(game){}

gameMenu.prototype={
	create: function(){
		var titleText=game.add.text(400, 10, "Scatter Bag", {font: "35px Arial", fill: "#000000", align: "center"});
		titleText.anchor.setTo(0.5, 0.5);
		var playButton=game.add.button(400, 100, "play", this.launchTheGame/*, this*/);
		playButton.anchor.setTo(0.5, 0.5);
		var highScoresButton=game.add.button(400, 200, "highScores", this.launchHighScores/*, this*/);
		highScoresButton.anchor.setTo(0.5,0.5);
	},
	launchTheGame: function(){
		game.state.start("TheGame");
	},
	launchHighScores: function(){
		game.state.start("HighScores");
	}
}