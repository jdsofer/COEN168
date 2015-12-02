var gameOver=function(game){}

gameOver.prototype={
	init: function(score){
		alert("Your Score: "+score);
	},
	create: function(){
  		var gameOverText=game.add.text(400, 10, "Game Over", {font: "35px Arial", fill: "#000000", align: "center"});
		gameOverText.anchor.setTo(0.5, 0.5);
		var playAgainButton=game.add.button(400, 100, "playAgain", this.launchTheGame/*, this*/);
		playAgainButton.anchor.setTo(0.5,0.5);
		var gameMenuButton=game.add.button(400, 200, "gameMenu", this.launchGameMenu/*, this*/);
		gameMenuButton.anchor.setTo(0.5,0.5);
	},
	launchTheGame: function(){
		game.state.start("TheGame");
	},
	launchGameMenu: function(){
		game.state.start("GameMenu");
	}
}