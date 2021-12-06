import { GameScene } from "~/scenes/gameScene"
import { MyGame } from "~/game"
import { controlKeys, PlayerAction } from "~/types/main"
import { Config } from "~/config"

export class GameController {
    scene: GameScene
    controls: Record<controlKeys, Phaser.Input.Keyboard.Key>
    playerAction: PlayerAction


    constructor(game: MyGame) {
        this.scene = game.getGameScene()
        this.resetAction()
        this.controls = {
            left: this.scene.input.keyboard.addKey('left'),
            right: this.scene.input.keyboard.addKey('right'),
            up: this.scene.input.keyboard.addKey('up'),
            down: this.scene.input.keyboard.addKey('down'),
            fire: this.scene.input.keyboard.addKey('space'),
        }
    }

    resetAction() {
        this.playerAction = Config.getDefaultPlayerAction()
    }

    isDiagonal() {
        return (this.playerAction.direction.x == -1 && this.playerAction.direction.y == 1) ||
            (this.playerAction.direction.x == -1 && this.playerAction.direction.y == -1) ||
            (this.playerAction.direction.x == 1 && this.playerAction.direction.y == 1) ||
            (this.playerAction.direction.x == 1 && this.playerAction.direction.y == -1)
    }

    update() {
        this.resetAction()
        if (this.controls.left.isDown) {
            this.playerAction.direction.x = -1
        }
        if (this.controls.right.isDown) {
            this.playerAction.direction.x = 1
        }
        if (this.controls.up.isDown) {
            this.playerAction.direction.y = -1
        }
        if (this.controls.down.isDown) {
            this.playerAction.direction.y = 1
        }
        if (this.controls.fire.isDown) {
            console.log('fire')
        }
    }
}
