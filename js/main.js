var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background', 'assets/space.jpg');
	game.load.image('Mario', 'assets/Mario.png');
}

var bmd = null;
var points = {
	'x': [ 32, 128, 256, 384, 512, 608 ],
	'y': [ 240, 240, 240, 240, 240, 240 ]
};

function create() {
	//game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
	//game.add.sprite(0, 0, 'Mario');

	bmd = add.bitmapData(game.width, game.height);
	bmd.addToWorld();

	var py = points.y;
	for (var i = 0; i < py.length; i++) {
		py[i] = rnd.between(32, 432);
	}

	plot();
}

function update() {

}

function plot() {

	bmd.clear();
	var x = 1 / game.width;

        for (var i = 0; i <= 1; i += x)
        {
            var px = math.catmullRomInterpolation(points.x, i);
            var py = math.catmullRomInterpolation(points.y, i);

            bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
        }

        for (var p = 0; p < points.x.length; p++)
        {
            bmd.rect(points.x[p]-3, points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }
}

//game.state.add('Game', PhaserGame, true);