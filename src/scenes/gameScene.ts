import { MyGame } from '~/game'
import { Config } from '~/config'
import { Player } from '~/entities/player'

export class GameScene extends Phaser.Scene {
    game: MyGame
    player: Player
    constructor() {
        super({ key: Config.scenes.keys.game })
    }

    init() {
        this.player = new Player(this.game, 20, 20)
    }

    create() {
        
    }

}
