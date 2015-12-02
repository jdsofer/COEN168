var theGame=function(game){
	briefcaseChoices=["redBriefcase", "blueBriefcase", "greenBriefcase", "yellowBriefcase"];
	lifeIcons=[];
	currentBriefcases=[];
	randomNumber=0;
	score=0;
	livesLeft=3;
	scoreText="";
}

theGame.prototype={
	init: function(){
		score=0;
		livesLeft=3;
	},
	create: function(){
		this.game.add.image(this.game.world.centerX, this.game.world.centerY, "background").anchor.set(0.6, 0.5);

		this.game.physics.startSystem(Phaser.Physics.P2JS);
		this.game.physics.p2.gravity.y=200;

		var spriteMaterial=this.game.physics.p2.createMaterial("spriteMaterial");
		var worldMaterial=this.game.physics.p2.createMaterial("worldMaterial");
		var contactMaterial=this.game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, {restitution: 0.6});
		this.game.physics.p2.setWorldMaterial(worldMaterial);

		randomNumber=(Math.round(Math.random()*100)%4);
		this.briefcase=this.game.add.sprite(400, 0, briefcaseChoices[randomNumber]);

		//Load Score
		scoreText=this.game.add.text(100, 100, "Score: 0", {font: "35px Arial", fill: "#000000", align: "center"});
		scoreText.anchor.setTo(0.5, 0.5);

		//Load lives
		var xPosition=30;
		for(var i=0;i<3;i++){
			this.life=this.game.add.sprite(xPosition, 30, "lifeIcon");
			xPosition+=50;
			lifeIcons.push(this.life);
		}

		//Load ledges
		this.leftLedge=this.game.add.sprite(200, 400, "conveyorBelt");
		this.middleLedge=this.game.add.sprite(400, 300, "conveyorBelt");
		this.rightLedge=this.game.add.sprite(600, 400, "conveyorBelt");

		//Load bins
		this.redBaggageCart=this.game.add.sprite(10, 560, "redBaggageCart");
		this.blueBaggageCart=this.game.add.sprite(200, 560, "blueBaggageCart");
		this.greenBaggageCart=this.game.add.sprite(410, 560, "greenBaggageCart");
		this.yellowBaggageCart=this.game.add.sprite(600, 560, "yellowBaggageCart");

		//Hold all briefcases in an array
		currentBriefcases[0]=this.briefcase;

		//Enable physics
		this.game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);

		this.middleLedge.body.static=true;
		this.leftLedge.body.static=true;
		this.rightLedge.body.static=true;

		this.briefcase.body.setMaterial(spriteMaterial);
		this.leftLedge.body.setMaterial(worldMaterial);
		this.middleLedge.body.setMaterial(worldMaterial);
		this.rightLedge.body.setMaterial(worldMaterial);

		this.briefcase.body.data.gravityScale=2.0;

		//Enable input for left ledge
		this.leftLedge.inputEnabled=true;
		this.leftLedge.input.useHandCursor=true;

		//Enable input for middle ledge
		this.middleLedge.inputEnabled=true;
		this.middleLedge.input.useHandCursor=true;

		//Enable input for right ledge
		this.rightLedge.inputEnabled=true;
		this.rightLedge.input.useHandCursor=true;

		this.game.time.events.loop((Phaser.Timer.SECOND*5), newFallingObject, this);

		function newFallingObject(){
			randomNumber=(Math.round(Math.random()*100)%4);
			this.briefcase=this.game.add.sprite(400, 0, briefcaseChoices[randomNumber]);

			this.game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);
			this.briefcase.body.setMaterial(spriteMaterial);
			this.briefcase.body.data.gravityScale=2.0;

			currentBriefcases.push(this.briefcase);
		}
	},
	update: function(){
		if(livesLeft==0){
			this.game.state.start("GameOver", true, false, score);
		}

		if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)||(this.input.activePointer.x<(this.game.width/2)&&this.input.activePointer.isDown)){
			this.leftLedge.body.angle-=5;
			this.middleLedge.body.angle-=5;
			this.rightLedge.body.angle-=5;
		}

		else if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)||(this.input.activePointer.x>(this.game.width/2)&&this.input.activePointer.isDown)){
			this.leftLedge.body.angle+=5;
			this.middleLedge.body.angle+=5;
			this.rightLedge.body.angle+=5;
		}

		else{
			this.leftLedge.body.angle+=0;
			this.middleLedge.body.angle+=0;
			this.rightLedge.body.angle+=0;
		}

		for(var i=0;i<currentBriefcases.length;i++)
			if(Math.round(currentBriefcases[i].y)>540){
				//console.log(currentBriefcases[i].x); //Debugging

				if((Math.round(currentBriefcases[i].x)>10)&&(Math.round(currentBriefcases[i].x)<190)){
					console.log(currentBriefcases[i].key);
					if(currentBriefcases[i].key=="redBriefcase"){
						score+=1;
						scoreText.setText("Score: "+score);
					}

					else{
						lifeIcons[livesLeft-1].kill();
						lifeIcons.splice(livesLeft-1, 1);
						livesLeft-=1;
					}
				}

				else if((Math.round(currentBriefcases[i].x)>200)&&(Math.round(currentBriefcases[i].x)<380)){
					if(currentBriefcases[i].key=="blueBriefcase"){
						score+=1;
						scoreText.setText("Score: "+score);
					}

					else{
						lifeIcons[livesLeft-1].kill();
						lifeIcons.splice(livesLeft-1, 1);
						livesLeft-=1;
					}
				}

				else if((Math.round(currentBriefcases[i].x)>410)&&(Math.round(currentBriefcases[i].x)<590)){
					if(currentBriefcases[i].key=="greenBriefcase"){
						score+=1;
						scoreText.setText("Score: "+score);
					}

					else{
						lifeIcons[livesLeft-1].kill();
						lifeIcons.splice(livesLeft-1, 1);
						livesLeft-=1;
					}
				}

				else if((Math.round(currentBriefcases[i].x)>600)&&(Math.round(currentBriefcases[i].x)<780)){
					if(currentBriefcases[i].key=="yellowBriefcase"){
						score+=1;
						scoreText.setText("Score: "+score);
					}

					else{
						lifeIcons[livesLeft-1].kill();
						lifeIcons.splice(livesLeft-1, 1);
						livesLeft-=1;
					}
				}

				currentBriefcases[i].kill();
				currentBriefcases.splice(i, 1);
			}
	},
	/*launchGameOver: function(){
		this.game.state.start("GameOver");
	}*/
};
/*
this.game.state.add("NewGame", gameState);
this.game.state.start("NewGame");*/
