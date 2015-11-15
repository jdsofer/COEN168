var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow');

var briefcasesArray = [];

var gameState = {

	preload: function() {

		game.load.image('background', 'assets/test-background.png');
		game.load.image('Briefcase', 'assets/briefcase.png');
		game.load.image('ConveyorBelt', 'assets/ConveyorBelt.png');

	},

	create: function() {

		//this.game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
		this.game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5, 0.5);

		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.gravity.y = 200;

		var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial');
    	var worldMaterial = game.physics.p2.createMaterial('worldMaterial');
    	var contactMaterial = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { restitution: 0.05 });

    	game.physics.p2.setWorldMaterial(worldMaterial);

    	this.briefcase = this.game.add.sprite(400, 0, 'Briefcase');
    	this.leftLedge = this.game.add.sprite(200, 400, 'ConveyorBelt');
		this.middleLedge = this.game.add.sprite(400, 300, 'ConveyorBelt');
		this.rightLedge = this.game.add.sprite(600, 400, 'ConveyorBelt');

		//Hold all briefcases in an Array
		briefcasesArray[0] = this.briefcase;

    	//Enable for physics
    	game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);
    	this.middleLedge.body.static = true;
    	this.leftLedge.body.static = true;
    	this.rightLedge.body.static = true;

    	this.briefcase.body.setMaterial(spriteMaterial);
   		this.leftLedge.body.setMaterial(worldMaterial);
   		this.middleLedge.body.setMaterial(worldMaterial);
   		this.rightLedge.body.setMaterial(worldMaterial);

		this.briefcase.body.data.gravityScale = 0.9;

		//Enable inpurt for left ledge
		this.leftLedge.inputEnabled = true;
		this.leftLedge.input.useHandCursor = true;

		//Enable inpurt for middle ledge
		this.middleLedge.inputEnabled = true;
		this.middleLedge.input.useHandCursor = true;

		//Enable inpurt for right ledge
		this.rightLedge.inputEnabled = true;
		this.rightLedge.input.useHandCursor = true;

		game.time.events.loop((Phaser.Timer.SECOND * 2), newFallingObject, this);

		function newFallingObject() {
    		this.briefcase = this.game.add.sprite(400, 0, 'Briefcase');
    		game.physics.p2.enable([this.briefcase, this.leftLedge, this.middleLedge, this.rightLedge]);
    		this.briefcase.body.data.gravityScale = 0.9;
    		briefcasesArray.push(this.briefcase);
		}

	},

	update: function() {

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    	{
    		this.leftLedge.body.angle -= 5;
    		this.middleLedge.body.angle -= 5;
    		this.rightLedge.body.angle -= 5;
    	}
    	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    	{
    		this.leftLedge.body.angle += 5;
    		this.middleLedge.body.angle += 5;
    		this.rightLedge.body.angle += 5;
    	}
    	else
    	{
    		this.leftLedge.body.angle += 0;
    		this.middleLedge.body.angle += 0;
    		this.rightLedge.body.angle += 0;
    	}

    	for (var i = 0; i < briefcasesArray.length; i++) {
    		if (Math.round(briefcasesArray[i].y) > 540) {
    			briefcasesArray[i].kill();
    			briefcasesArray.splice(i, 1);

    		}
    	}
        
	}

};

game.state.add('newGame', gameState);  
game.state.start('newGame');
