type controlKeys =
    | 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'fire'


export type PlayerAction = {
    direction: {
        x: number,
        y: number,
    },
    is_fire: bool
}


