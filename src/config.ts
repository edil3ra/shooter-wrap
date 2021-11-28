type SkipScene = 'noSkip' | 'game' 


export class Config {
    public static readonly debug = process.env.DEBUG
    public static readonly packer = {
        name: 'packer',
        background: 'background-main.jpg',
    }

    public static readonly events = {
        game: {
            EVENT_CHANGE: 'event_change',
        },
    }

    public static readonly scenes = {
        keys: {
            game: 'gameScene',
            boot: 'bootScene',
        }
    }
}
