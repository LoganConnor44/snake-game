import { GameState } from "./GameState";
import { GameObject } from "./GameObject";
import { CardinalDirections } from "./CardinalDirections";
import { OrderedPair } from "./OrderedPair";

class Snake extends GameObject {
    public locations: OrderedPair[];
    public location: OrderedPair;
    public direction: OrderedPair;
    public size: Number;

    constructor() {
        super();
        this.name = "Snake";
        this.location = new OrderedPair(1, 1);
        this.locations = [this.location];
        this.direction = CardinalDirections.East.value;
        this.size = 1
    }

    /**
     * Identifies if the user attempts to have the snake move on top of itself.
     * 
     * @param {*} move
     * @returns boolean
     */
    isValidMove(direction: OrderedPair, state: GameState): Boolean {
        return state.userInput[0].x + direction.x != 0 || 
            state.userInput[0].y + direction.y != 0;
    }

    public move(): void {
        this.location = this.nextHead();
    }

    private nextHead(): OrderedPair {
        let nextlocation = new OrderedPair(
            this.direction.x + this.location.x,
            this.direction.y + this.location.y
        );
        return nextlocation;
    }

}

export { Snake };