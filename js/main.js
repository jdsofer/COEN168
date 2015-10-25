var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background', 'assets/space.jpg');
	game.load.image('Mario', 'assets/Mario.png');
}

function create() {
	game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.49, 0.21);
	game.add.sprite(0, 0, 'Mario');
}

function update() {

}