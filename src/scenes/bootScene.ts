import * as Phaser from 'phaser'
import { Config } from '~/config'
import { MyGame } from '~/game'

export class BootScene extends Phaser.Scene {
    public game: MyGame
    private loadingBar: Phaser.GameObjects.Graphics
    private progressBar: Phaser.GameObjects.Graphics
    constructor() {
        super({ key: Config.scenes.keys.boot })
    }

    preload(): void {
        this.cameras.main.setBackgroundColor(0x000000)
        this.createLoadingGraphics()

        this.load.on(
            'progress',
            (value: number) => {
                this.progressBar.clear()
                this.progressBar.fillStyle(0x00ff00, 1)
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                )
            },
            this
        )

        this.load.on('complete', (data: any) => {
            this.progressBar.destroy()
            this.loadingBar.destroy()
            this.scene.start(Config.scenes.keys.game)
        })

        this.load.pack('preload', 'assets/pack.json', 'preload')
    }

    private createLoadingGraphics(): void {
        this.loadingBar = this.add.graphics()
        this.loadingBar.fillStyle(0x00ff00, 1)
        this.loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        )
        this.progressBar = this.add.graphics()
    }
}
