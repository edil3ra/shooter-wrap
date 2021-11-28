import { MyGame } from '~/game'
import { Config } from '~/config'

export class GameScene extends Phaser.Scene {
    public game: MyGame
    constructor() {
        super({ key: Config.scenes.keys.game })
    }

    init() {
        this.add.image(0, 0, 'bullets')
    }

    create() {
        
    }

}
