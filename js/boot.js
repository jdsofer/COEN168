var boot=function(game){
	console.log("%cStarting Scatter Bag...", "color: white; background:black");
};

boot.prototype={
	preload: function(){
		this.game.load.image("background", "assets/background.jpg");
	},
  	create: function(){
		this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally=true;
		this.scale.pageAlignVertically=true;
		this.game.state.start("Preload");
	}
}