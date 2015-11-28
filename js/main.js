var game=new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow');

var briefcaseChoices=['redBriefcase', 'blueBriefcase', 'greenBriefcase', 'yellowBriefcase'];
var currentBriefcases=[];
var randomNumber=0;
var counter=0;
var livesLeft=3;

var gameState={

	preload: function(){
		game.load.image('background', 'assets/background.jpg');
		game.load.image('conveyorBelt', 'assets/conveyorBelt.png');

		game.load.image('redBriefcase', 'assets/redBriefcase.png');
		game.load.image('blueBriefcase', 'assets/blueBriefcase.png');
		game.load.image('greenBriefcase', 'assets/greenBriefcase.png');
		game.load.image('yellowBriefcase', 'assets/yellowBriefcase.png');

		game.load.image('redBaggageCart', 'assets/redBaggageCart.png');
		game.load.image('blueBaggageCart', 'assets/blueBaggageCart.png');
		game.load.image('greenBaggageCart', 'assets/greenBaggageCart.png');
		game.load.image('yellowBaggageCart', 'assets/yellowBaggageCart.png');
	},

	create: function(){
		//this.game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
		this.game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.6, 0.5);

		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.gravity.y=200;

		var spriteMaterial=game.physics.p2.createMaterial('spriteMaterial');
		var worldMaterial=game.physics.p2.createMaterial('worldMaterial');
		var contactMaterial=game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, {restitution: 0.6});

		game.physics.p2.setWorldMaterial(worldMaterial);

		randomNumber=(Math.round(Math.random()*100)%4);

		this.briefcase=this.game.add.sprite(400, 0, briefcaseChoices[randomNumber]);

		//Load ledges
		this.leftLedge=this.game.add.sprite(200, 400, 'conveyorBelt');
		this.middleLedge=this.game.add.sprite(400, 300, 'conveyorBelt');
		this.rightLedge=this.game.add.sprite(600, 400, 'conveyorBelt');

		//Load bins
		this.redBaggageCart=this.game.add.sprite(10, 560, 'redBaggageCart');
		this.blueBaggageCart=this.game.add.sprite(200, 560, 'blueBaggageCart');
		this.greenBaggageCart=this.game.add.sprite(410, 560, 'greenBaggageCart');
		this.yellowBaggageCart=this.game.add.sprite(600, 560, 'yellowBaggageCart');

		//Hold all briefcases in an array
		currentBriefcases[0]=this.briefcase;

		//Enable physics
		game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);

		this.middleLedge.body.static=true;
		this.leftLedge.body.static=true;
		this.rightLedge.body.static=true;

		this.briefcase.body.setMaterial(spriteMaterial);
		this.leftLedge.body.setMaterial(worldMaterial);
		this.middleLedge.body.setMaterial(worldMaterial);
		this.rightLedge.body.setMaterial(worldMaterial);

		this.briefcase.body.data.gravityScale=3.5;

		//Enable input for left ledge
		this.leftLedge.inputEnabled=true;
		this.leftLedge.input.useHandCursor=true;

		//Enable input for middle ledge
		this.middleLedge.inputEnabled=true;
		this.middleLedge.input.useHandCursor=true;

		//Enable input for right ledge
		this.rightLedge.inputEnabled=true;
		this.rightLedge.input.useHandCursor=true;

		game.time.events.loop((Phaser.Timer.SECOND*5), newFallingObject, this);

		function newFallingObject(){
			randomNumber=(Math.round(Math.random()*100)%4);
			this.briefcase=this.game.add.sprite(400, 0, briefcaseChoices[randomNumber]);

			game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);
			this.briefcase.body.setMaterial(spriteMaterial);
			this.briefcase.body.data.gravityScale=3.5;

			currentBriefcases.push(this.briefcase);
		}
	},

	update: function(){
		if(livesLeft==0){
			console.log(counter);
			console.log(livesLeft);
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)||(this.input.activePointer.x<(game.width/2)&&this.input.activePointer.isDown)){
			this.leftLedge.body.angle-=5;
			this.middleLedge.body.angle-=5;
			this.rightLedge.body.angle-=5;
		}

		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)||(this.input.activePointer.x>(game.width/2)&&this.input.activePointer.isDown)){
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
					if(currentBriefcases[i].key=='redBriefcase')
						counter+=1;

					else
						livesLeft-=1;
				}

				else if((Math.round(currentBriefcases[i].x)>200)&&(Math.round(currentBriefcases[i].x)<380)){
					if(currentBriefcases[i].key=='blueBriefcase')
						counter+=1;

					else
						livesLeft-=1;
				}

				else if((Math.round(currentBriefcases[i].x)>410)&&(Math.round(currentBriefcases[i].x)<590)){
					if(currentBriefcases[i].key=='greenBriefcase')
						counter+=1;

					else
						livesLeft-=1;
				}

				else if((Math.round(currentBriefcases[i].x)>600)&&(Math.round(currentBriefcases[i].x)<780)){
					if(currentBriefcases[i].key=='yellowBriefcase')
						counter+=1;

					else
						livesLeft-=1;
				}

				currentBriefcases[i].kill();
				currentBriefcases.splice(i, 1);
			}
	}
};

game.state.add('newGame', gameState);
game.state.start('newGame');