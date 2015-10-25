var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background', 'assets/space.jpg');
}

function create() {
	bg = game.add.sprite(0, 0, 50, 100, 'background');
}

function update() {

}