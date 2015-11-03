var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow');

var gameState = {

	preload: function() {
		game.load.image('background', 'assets/space.jpg');
		game.load.image('Briefcase', 'assets/briefcase.png');
	},

	create: function() {
		this.game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
		this.briefcase = this.game.add.sprite(0, 0, 'Briefcase');
		this.briefcase.anchor.set(0.5, 0.5);

		this.bmd = null;

		this.points = {
        	'x': [ 20, 256, 684, 512, 308, 136, 400, 488 ],
        	'y': [ 170, 40, 60, 240, 240, 360, 460, 688]
    	};

    	this.position = 0;
    	this.path = [];

    	this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    	this.bmd.addToWorld();

    	var py = this.points.y;

    	this.plot();
	},

	plot: function() {

		this.bmd.clear();

		this.path = [];

        var x = 1 / game.width;

        for (var i = 0; i <= 1; i += x)
        {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);

            this.path.push( { x: px, y: py });

            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
        }

        for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }

	},

	update: function() {
		
		this.briefcase.x = this.path[this.position].x;
        this.briefcase.y = this.path[this.position].y;

        this.position++;

            if (this.position >= this.path.length)
            {
                this.position = 0;
            }
        
	},

};

game.state.add('newGame', gameState);  
game.state.start('newGame');

/*
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

var mainState = {

    preload: function() { 
        game.stage.backgroundColor = '#71c5cf';

        game.load.image('bird', 'assets/bird.png');  
        game.load.image('pipe', 'assets/pipe.png'); 

        // Load the jump sound
        game.load.audio('jump', 'assets/jump.wav');     
    },

    create: function() { 
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.pipes = game.add.group();
        this.pipes.enableBody = true;
        this.pipes.createMultiple(20, 'pipe');  
        this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);           

        this.bird = this.game.add.sprite(100, 245, 'bird');
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000; 

        // New anchor position
        this.bird.anchor.setTo(-0.2, 0.5); 
 
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this); 

        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  

        // Add the jump sound
        this.jumpSound = this.game.add.audio('jump');
    },

    update: function() {
        if (this.bird.inWorld == false)
            this.restartGame(); 

        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this); 

        // Slowly rotate the bird downward, up to a certain point.
        if (this.bird.angle < 20)
            this.bird.angle += 1;     
    },

    jump: function() {
        // If the bird is dead, he can't jump
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.y = -350;

        // Jump animation
        game.add.tween(this.bird).to({angle: -20}, 100).start();

        // Play sound
        this.jumpSound.play();
    },

    hitPipe: function() {
        // If the bird has already hit a pipe, we have nothing to do
        if (this.bird.alive == false)
            return;
            
        // Set the alive property of the bird to false
        this.bird.alive = false;

        // Prevent new pipes from appearing
        this.game.time.events.remove(this.timer);
    
        // Go through all the pipes, and stop their movement
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },

    restartGame: function() {
        game.state.start('main');
    },

    addOnePipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();

        pipe.reset(x, y);
        pipe.body.velocity.x = -200;  
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    addRowOfPipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1) 
                this.addOnePipe(400, i*60+10);   
    
        this.score += 1;
        this.labelScore.text = this.score;  
    },
};

game.state.add('main', mainState);  
game.state.start('main');
*/ 



/*
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

    var PhaserGame = function () {

        this.bmd = null;

        this.alien = null;

        this.mode = 0;

        this.points = {
            'x': [ 32, 128, 256, 384, 512, 608 ],
            'y': [ 240, 240, 240, 240, 240, 240 ]
        };

        this.pi = 0;
        this.path = [];

    };

    PhaserGame.prototype = {

        init: function () {

            this.game.renderer.renderSession.roundPixels = true;
            this.stage.backgroundColor = '#204090';

        },

        preload: function () {

            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally
            this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue008/';
            this.load.crossOrigin = 'anonymous';

            this.load.image('alien', 'assets/ufo.png');
            this.load.bitmapFont('shmupfont', 'assets/shmupfont.png', 'assets/shmupfont.xml');

            //  Note: Graphics are not for use in any commercial project

        },

        create: function () {

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();

            this.alien = this.add.sprite(0, 0, 'alien');
            this.alien.anchor.set(0.5);

            var py = this.points.y;

            for (var i = 0; i < py.length; i++)
            {
                py[i] = this.rnd.between(32, 432);
            }

            this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Linear", 24);

            this.input.onDown.add(this.changeMode, this);

            this.plot();

        },

        changeMode: function () {

            this.mode++;

            if (this.mode === 3)
            {
                this.mode = 0;
            }

            if (this.mode === 0)
            {
                this.hint.text = "Linear";
            }
            else if (this.mode === 1)
            {
                this.hint.text = "Bezier";
            }
            else if (this.mode === 2)
            {
                this.hint.text = "Catmull Rom";
            }

            this.plot();

        },

        plot: function () {

            this.bmd.clear();

            this.path = [];

            var x = 1 / game.width;

            for (var i = 0; i <= 1; i += x)
            {
                if (this.mode === 0)
                {
                    var px = this.math.linearInterpolation(this.points.x, i);
                    var py = this.math.linearInterpolation(this.points.y, i);
                }
                else if (this.mode === 1)
                {
                    var px = this.math.bezierInterpolation(this.points.x, i);
                    var py = this.math.bezierInterpolation(this.points.y, i);
                }
                else if (this.mode === 2)
                {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }

                this.path.push( { x: px, y: py });

                this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
                this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }

        },

        update: function () {

            this.alien.x = this.path[this.pi].x;
            this.alien.y = this.path[this.pi].y;

            this.pi++;

            if (this.pi >= this.path.length)
            {
                this.pi = 0;
            }

        }

    };

    game.state.add('Game', PhaserGame, true);
*/
