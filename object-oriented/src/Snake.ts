import { GameState } from "./GameState";
import { GameObject } from "./GameObject";
import { CardinalDirections } from "./CardinalDirections";
import { OrderedPair } from "./OrderedPair";

class Snake extends GameObject {
    public locations: OrderedPair[];
    public direction: OrderedPair;

    constructor() {
        super();
        this.name = "Snake";
        this.locations = [];
        this.direction = CardinalDirections.East.value;
    }

    /**
     * Identifies if the user attempts to have the snake move on top of itself.
     * 
     * @param {*} move
     * @returns boolean
     */
    isValidMove(direction: OrderedPair, state: GameState) {
        return state.userInput[0].x + direction.x != 0 || 
            state.userInput[0].y + direction.y != 0;
    }

}

export { Snake };