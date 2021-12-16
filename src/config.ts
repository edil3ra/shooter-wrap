import { PlayerAction } from '~/types/main'
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

    public static getDefaultPlayerAction(): PlayerAction {
        return {
            direction: {
                x: 0,
                y: 0,
            },
            is_fire: false
        }
    }
 
   public static readonly entities = {
       player: {
           texture: 'ships',
           frame:'Wings_B_96x120.png',
           width: 32,
           height: 32,
           body: {
               radius: 8,
           }
       }
   }
}
