import * as Phaser from 'phaser'
import Sprite = Phaser.GameObjects.Sprite
import { Config } from '~/config'
import { GameScene } from '~/scenes/gameScene'


class PlayerData extends Phaser.Data.DataManager {
    constructor(scene: GameScene) {
        super(scene)
        this.set('speed', 1000)
        this.set('health', 1000)
    }
    
    getSpeed(): number  {
        return this.get('speed') as number
    }

    getHealth(): number  {
        return this.get('health') as number
    }
    
}

export class Player extends Phaser.GameObjects.Sprite {
    scene: GameScene
    body: Phaser.Physics.Arcade.Body
    data: PlayerData
    
    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y, Config.entities.player.texture, Config.entities.player.frame)
        this.data = new PlayerData(scene)
        this.displayWidth = Config.entities.player.width
        this.displayHeight = Config.entities.player.height
        this.scene.physics.world.enable(this)
        this.body.setOffset(
            this.body.sourceWidth * 0.5 - Config.entities.player.body.radius,
            this.body.sourceWidth * 0.5 - Config.entities.player.body.radius
        )
        this.body.setCircle(Config.entities.player.body.radius)
        this.scene.add.existing(this)
    }
    
    update(_elapsed: number, dt: number) {
        this.body.velocity.x = this.scene.gameController.playerAction.direction.x * this.data.getSpeed()
        this.body.velocity.y = this.scene.gameController.playerAction.direction.y * this.data.getSpeed()
        if(this.scene.gameController.isDiagonal()) {
            this.body.velocity.x = this.body.velocity.x * Math.cos(Phaser.Math.DegToRad(45))
            this.body.velocity.y = this.body.velocity.y * Math.sin(Phaser.Math.DegToRad(45))
        }
    }
}
