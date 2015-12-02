var highScores=function(game){
	scores={};		//List of score entries
}

highScores.prototype={
	init: function(){
		this.getScores();
	},
	
	create: function(){	
	
		this.game.add.image(this.game.world.centerX, this.game.world.centerY, "background").anchor.set(0.6, 0.5);
		var highScoreText=this.game.add.text(400, 50, "Scatter Bag High Scores", {font: "35px Arial", fill: "#000000", align: "center"});
		highScoreText.anchor.setTo(0.5, 0.5);
		var gameMenuButton=this.game.add.button(400, 420, "gameMenu", this.launchGameMenu);
		gameMenuButton.anchor.setTo(0.5,0.5);
		
		var rank = 1;
		var yOffset = 140;
		for (var i = 0; i < 5; i++) {
			this.game.add.text(320, yOffset, rank + ": " + scores[i].name + ", " + scores[i].score, {font: "25px Arial", fill: "#000000", align: "left"});
			rank += 1;
			yOffset += 30;
		}
		
	},
	
	getScores: function(){
		
		$.ajax({
			url: "http://52.33.222.116/lab8/scores/index.php",
			method: "GET",
			async: false,
		}).done(function(result){
			scores = result.scores;
		});
	},
	
	launchGameMenu: function(){
		this.game.state.start("GameMenu");
	}
};