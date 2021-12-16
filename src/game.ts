import { BootScene } from '~/scenes/bootScene'
import { GameScene } from '~/scenes/gameScene'
import * as Phaser from 'phaser'
import { Config } from './config'

export class MyGame extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            title: 'shooter-wrap',
            scale: {
                width: window.innerWidth,
                height: window.innerHeight,
                parent: 'shooter-wrap',
            },
            parent: 'shooter-wrap',
            dom: {
                createContainer: true,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                    gravity: { x: 0, y: 0 },
                }
            },
            scene: [
                BootScene,
                GameScene,
            ],
        })
    }

    public getGameScene(): GameScene {
        return this.scene.getScene(Config.scenes.keys.game) as GameScene
    }
    
}


