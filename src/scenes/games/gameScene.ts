import { Config } from '~/config'
import { MyGame } from '~/game'

export class GameScene extends Phaser.Scene {
    public game: MyGame
    constructor() {
        super({ key: Config.scenes.keys.game })
    }

    init() {
        console.log('hello')
    }

    create() {
        console.log('create')
    }

}
