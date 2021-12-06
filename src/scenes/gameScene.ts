import { MyGame } from '~/game'
import { Config } from '~/config'
import { Player } from '~/entities/player'
import { GameController } from '~/controllers/gameController'

export class GameScene extends Phaser.Scene {
    game: MyGame
    player: Player
    gameController: GameController
    constructor() {
        super({ key: Config.scenes.keys.game })
    }

    init() {
        this.gameController = new GameController(this.game)
    }

    create() {
        this.player = new Player(this.game, this.scale.width * 0.5, this.scale.height - 20)        
    }


    update(elapsed: number, dt: number) {
        this.gameController.update()
        this.player.update(elapsed, dt)
    }

}
