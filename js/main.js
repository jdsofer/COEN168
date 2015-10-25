var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background', 'assets/space.jpg');
	game.load.image('Mario', 'assets/Mario.png');
}

function create() {
	game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
	game.add.sprite(0, 0, 'Mario');

	this.bmd = this.add.bitmapData(this.game.width, this.game.height);
	this.bmd.addToWorld();

	var py = this.points.y;
	for (var i = 0; i < py.length; i++) {
		py[i] = this.rnd.between(32, 432);
	}
}

function update() {

}

var PhaserGame = function () {

    this.bmd = null;

    this.points = {
        'x': [ 32, 128, 256, 384, 512, 608 ],
        'y': [ 240, 240, 240, 240, 240, 240 ]
    };

};

PhaserGame.prototype = {

    create: function () {

        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        var py = this.points.y;

        for (var i = 0; i < py.length; i++)
        {
            py[i] = this.rnd.between(32, 432);
        }

        this.plot();

    },

    plot: function () {

        this.bmd.clear();

        var x = 1 / game.width;

        for (var i = 0; i <= 1; i += x)
        {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);

            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
        }

        for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }

    }

};

game.state.add('Game', PhaserGame, true);