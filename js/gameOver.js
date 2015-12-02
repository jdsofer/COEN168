var gameOver=function(game){}

gameOver.prototype={
	init: function(score){
		this.score = score;
	},
	create: function(){
		this.game.add.image(this.game.world.centerX, this.game.world.centerY, "background").anchor.set(0.6, 0.5);
  		var gameOverText=this.game.add.text(400, 200, "Game Over", {font: "35px Arial", fill: "#000000", align: "center"});
		gameOverText.anchor.setTo(0.5, 0.5);
		var scoreText=this.game.add.text(400, 250, "Score: "+this.score, {font: "25px Arial", fill: "#000000", align: "center"});
		scoreText.anchor.setTo(0.5, 0.5);
		var playAgainButton=this.game.add.button(400, 320, "playAgain", this.launchTheGame);
		playAgainButton.anchor.setTo(0.5,0.5);
		var gameMenuButton=this.game.add.button(400, 420, "gameMenu", this.launchGameMenu);
		gameMenuButton.anchor.setTo(0.5,0.5);
	},
	launchTheGame: function(){
		this.game.state.start("TheGame");
	},
	launchGameMenu: function(){
		this.game.state.start("GameMenu");
	}
}