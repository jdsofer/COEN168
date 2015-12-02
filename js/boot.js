var boot=function(game){
	console.log("%cStarting Scatter Bag...", "color: white; background:black");
};

boot.prototype={
	preload: function(){
		game.load.image("background", "assets/background.jpg");
	},
  	create: function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally=true;
		game.scale.pageAlignVertically=true;
		game.state.start("Preload");
	}
}