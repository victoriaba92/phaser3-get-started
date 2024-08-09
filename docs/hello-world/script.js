// write here
class HelloWorld extends Phaser.Scene {
    constructor() {
        super("HelloWorld");
    }

    preload() {
        this.load.image("sky", "./assets/space3.png");
        this.load.image("logo", "./assets/logo.png");
    }

    create() {
        this.add.image(400, 300, "sky");

        this.logo = this.physics.add.image(400, 100, "logo");

        this.logo.body.setVelocity(100, 200);
        this.logo.body.setBounce(1, 1);
        this.logo.body.setCollideWorldBounds(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
            debug: false,
        },
    },
    scene: HelloWorld,
};

const game = new Phaser.Game(config);