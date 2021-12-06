import * as Phaser from 'phaser'
import Sprite = Phaser.GameObjects.Sprite
import { MyGame } from '~/game'
import { Config } from '~/config'
import { GameScene } from '~/scenes/gameScene'


export class Player {
    game: MyGame
    scene: GameScene
    sprite: Sprite
    speed: number
    
    constructor(game: MyGame, x: number, y: number) {
        this.game = game
        this.scene = game.getGameScene()
        this.speed = 400
        this.sprite = this.scene.add.sprite(x, y, 'ships', 'Component_WingShip_Spider_150x100.png')
    }
    
    update(_elapsed: number, dt: number) {
        let x = this.scene.gameController.playerAction.direction.x * this.speed * dt * 0.001
        let y = this.scene.gameController.playerAction.direction.y * this.speed * dt * 0.001
        if(this.scene.gameController.isDiagonal()) {
            x = x * Math.cos(Phaser.Math.DegToRad(45))
            y = y * Math.sin(Phaser.Math.DegToRad(45))
        }
        this.sprite.x += x
        this.sprite.y += y
    }
}
