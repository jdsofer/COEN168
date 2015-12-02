var preload=function(game){}

preload.prototype={
	preload: function(){
		var preloadBackground=this.add.image(400, 300, "background");
		preloadBackground.anchor.setTo(0.5, 0.5);
		game.load.image("conveyorBelt", "assets/conveyorBelt.png");
		game.load.image("lifeIcon", "assets/lifeIcon.png");
		game.load.image("redBriefcase", "assets/redBriefcase.png");
		game.load.image("blueBriefcase", "assets/blueBriefcase.png");
		game.load.image("greenBriefcase", "assets/greenBriefcase.png");
		game.load.image("yellowBriefcase", "assets/yellowBriefcase.png");
		game.load.image("redBaggageCart", "assets/redBaggageCart.png");
		game.load.image("blueBaggageCart", "assets/blueBaggageCart.png");
		game.load.image("greenBaggageCart", "assets/greenBaggageCart.png");
		game.load.image("yellowBaggageCart", "assets/yellowBaggageCart.png");
		game.load.image("highScores", "assets/highScores.png");
		game.load.image("gameMenu", "assets/gameMenu.png");
		game.load.image("play", "assets/play.png");
		game.load.image("playAgain", "assets/playAgain.png");
		game.load.image("submit", "assets/submit.png");
	},
	create: function(){
		game.state.start("GameMenu");
	}
}