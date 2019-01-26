class Snake extends GameObject{
    public locations: OrderedPair[];
    public direction: CardinalDirections;

    constructor() {
        super();
        this.name = "Snake";
        this.locations = [];
        this.direction = CardinalDirections.East;
    }

    /**
     * Identifies if the user attempts to have the snake move on top of itself.
     * 
     * @param {*} move
     * @returns boolean
     */
    isValidMove(direction: OrderedPair, state: GameState) {
        return state.moves[0].x + direction.x != 0 || 
            state.moves[0].y + direction.y != 0;
    }

}