var preload=function(game){}

preload.prototype={
	preload: function(){
		/*var preloadBackground=this.add.image(400, 300, "background");
		preloadBackground.anchor.setTo(0.5, 0.5);*/
		this.game.load.image("conveyorBelt", "assets/conveyorBelt.png");
		this.game.load.image("lifeIcon", "assets/lifeIcon.png");
		this.game.load.image("redBriefcase", "assets/redBriefcase.png");
		this.game.load.image("blueBriefcase", "assets/blueBriefcase.png");
		this.game.load.image("greenBriefcase", "assets/greenBriefcase.png");
		this.game.load.image("yellowBriefcase", "assets/yellowBriefcase.png");
		this.game.load.image("redBaggageCart", "assets/redBaggageCart.png");
		this.game.load.image("blueBaggageCart", "assets/blueBaggageCart.png");
		this.game.load.image("greenBaggageCart", "assets/greenBaggageCart.png");
		this.game.load.image("yellowBaggageCart", "assets/yellowBaggageCart.png");
		this.game.load.image("highScores", "assets/highScores.png");
		this.game.load.image("gameMenu", "assets/gameMenu.png");
		this.game.load.image("play", "assets/play.png");
		this.game.load.image("playAgain", "assets/playAgain.png");
		this.game.load.image("submit", "assets/submit.png");
	},
	create: function(){
		this.game.state.start("GameMenu");
	}
}