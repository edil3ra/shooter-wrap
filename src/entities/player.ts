import * as Phaser from 'phaser'
import Sprite = Phaser.GameObjects.Sprite
import { MyGame } from '~/game'
import { Config } from '~/config'
import { GameScene } from '~/scenes/gameScene'


export class Player {
    game: MyGame
    scene: GameScene
    sprite: Sprite
    
    constructor(game: MyGame, x: number, y: number) {
        this.game = game
        this.scene = game.scene.getScene(Config.scenes.keys.game) as GameScene
        this.sprite = this.scene.add.sprite(x, y, 'ships', )
    }
    
}
