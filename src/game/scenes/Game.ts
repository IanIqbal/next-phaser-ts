import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    lowCloud: Phaser.GameObjects.Image;
    highCloud: Phaser.GameObjects.Image;
    comet: Phaser.GameObjects.Image;
    
    gameText: Phaser.GameObjects.Text;

    platforms:Phaser.Physics.Arcade.StaticGroup
    startingXGround:number
    startingXFloating:number
    constructor() {
        super('Game');
    }

    preload() {
        console.log("this is preload main-game");
        this.startingXGround = 85
        this.startingXFloating = 122.5
        this.load.image("main-1", "game-assets/backgrounds/main-1.png")
        this.load.image("main-2", "game-assets/backgrounds/main-2.png")
        this.load.image("main-3", "game-assets/backgrounds/main-3.png")
        this.load.image("main-4", "game-assets/backgrounds/main-4.png")

        this.load.image("ground", "game-assets/platforms/ground.png")
        this.platforms = this.physics.add.staticGroup()
    }
    create() {
        this.physics.add.staticGroup()
        this.camera = this.cameras.main;

        this.background = this.add.image(512, 384, "main-1");
        this.background.setScale(2)

        this.lowCloud = this.add.image(512,384, "main-2")
        this.lowCloud.setScale(2)

        this.comet = this.add.image(512,384, "main-3")
        this.comet.setScale(2)

        this.highCloud = this.add.image(512,384, "main-4")
        this.highCloud.setScale(2)

        let groundXAccu = this.startingXGround
        for(let i = 0; i < 6; i++){
            this.platforms.create(groundXAccu,680, "ground").setScale(2).refreshBody()
            groundXAccu += 175
        }
        
        let floatXAccu = this.startingXFloating
        for(let i = 0; i < 4; i++){
            this.platforms.create(floatXAccu, 417.5, "ground")
            floatXAccu += 262.5
        }
        

        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
        this.scene.start('GameOver');
    }
}
