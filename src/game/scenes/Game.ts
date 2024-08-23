import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    lowCloud: Phaser.GameObjects.Image;
    highCloud: Phaser.GameObjects.Image;
    comet: Phaser.GameObjects.Image;
    
    gameText: Phaser.GameObjects.Text;

    constructor() {
        super('Game');
    }

    preload() {
        console.log("this is preload main-game");
        
        this.load.image("main-1", "game-assets/backgrounds/main-1.png")
        this.load.image("main-2", "game-assets/backgrounds/main-2.png")
        this.load.image("main-3", "game-assets/backgrounds/main-3.png")
        this.load.image("main-4", "game-assets/backgrounds/main-4.png")



    }
    create() {
        this.camera = this.cameras.main;
        // this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, "main-1");
        this.background.setScale(2)

        this.lowCloud = this.add.image(512,384, "main-2")
        this.lowCloud.setScale(2)

        this.comet = this.add.image(512,384, "main-3")
        this.comet.setScale(2)

        this.highCloud = this.add.image(512,384, "main-4")
        this.highCloud.setScale(2)
        // this.add.image(400, 300, "main-2");
        // this.add.image(400, 300, "main-3");
        // this.add.image(400, 300, "main-4");


      

        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
        this.scene.start('GameOver');
    }
}
