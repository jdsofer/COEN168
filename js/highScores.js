var highScores=function(game){
	scores=[];		//List of score entries
}

highScores.prototype={
	create: function(){
		game.add.text(game.world.centerX, 100, "Scatter Bags", {font: "60px Arial", fill: "#000000", align: "center"});
		var header=game.add.text(game.world.centerX, 200, "High Scores", {font: "45px Arial", fill: "#000000", align: "center"});
		var menuState=game.add.text(game.world.centerX, 400, "Main Menu", {font: "45px Arial", fill: "#000000",});
		var Scores={
			getScores: function(){
				var self=this;
				$.ajax({
					url: "http://52.33.222.116/lab8/scores/index.php",
					method: "GET",
				}).done(function(result){
					self.scores=result.scores;
				});
				if(self.scores.length==0)
					game.add.text(game.world.centerX, game.world.centerY, "No scores to display!", {font: "20px Arial", fill: "#000000"});
				var score0=game.add.text(game.world.centerX-50, 300, self.scores[0].score+" by "+self.scores[0].name, {font: "20px Arial", fill: "#000000"});
				var score1=game.add.text(game.world.centerX-50, 400, self.scores[1].score+" by "+self.scores[1].name, {font: "20px Arial", fill: "#000000"});
				var score2=game.add.text(game.world.centerX-50, 500, self.scores[2].score+" by "+self.scores[2].name, {font: "20px Arial", fill: "#000000"});
				var score3=game.add.text(game.world.centerX-50, 600, self.scores[3].score+" by "+self.scores[3].name, {font: "20px Arial", fill: "#000000"});
				var score4=game.add.text(game.world.centerX-50, 700, self.scores[4].score+" by "+self.scores[4].name, {font: "20px Arial", fill: "#000000"});
				var score5=game.add.text(game.world.centerX+50, 300, self.scores[5].score+" by "+self.scores[5].name, {font: "20px Arial", fill: "#000000"});
				var score6=game.add.text(game.world.centerX+50, 400, self.scores[6].score+" by "+self.scores[6].name, {font: "20px Arial", fill: "#000000"});
				var score7=game.add.text(game.world.centerX+50, 500, self.scores[7].score+" by "+self.scores[7].name, {font: "20px Arial", fill: "#000000"});
				var score8=game.add.text(game.world.centerX+50, 600, self.scores[8].score+" by "+self.scores[8].name, {font: "20px Arial", fill: "#000000"});
				var score9=game.add.text(game.world.centerX+50, 700, self.scores[9].score+" by "+self.scores[9].name, {font: "20px Arial", fill: "#000000"});
			}
		};
		menuState.inputEnabled=true;

		menuState.events.onInputDown.add(this.launchGameMenu/*, this*/);
	},
	launchGameMenu: function(){
		game.state.start("GameMenu");
	}
};