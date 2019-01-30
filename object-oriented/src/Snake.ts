import { GameState } from "./GameState";
import { GameObject } from "./GameObject";
import { CardinalDirections } from "./CardinalDirections";
import { OrderedPair } from "./OrderedPair";
import { Apple } from "./Apple";

class Snake extends GameObject {
    /**
     * Defines all locations of the Snake.
     * @var OrderedPair[]
     */
    public locations: OrderedPair[];
    /**
     * Defines the location of the snake head.
     * @var OrderedPair
     */
    public location: OrderedPair;
    /**
     * Defines the CardinalDirection of the snake.
     * @var OrderedPair
     */
    public direction: OrderedPair;
    /**
     * Defines the current size of the snake.
     * @var number
     */
    public size: number;

    /**
     * Initializes the snake with default values.
     */
    constructor() {
        super();
        this.name = "Snake";
        this.location = new OrderedPair(1, 1);
        this.locations = [this.location];
        this.direction = CardinalDirections.East.value;
        this.size = 1;
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

    didSnakeEat(apple: Apple): Boolean {
        return this.locations[0].x == apple.location.x &&
        this.locations[0].y == apple.location.y;
    }

    /**
     * Adds an OrderedPair to snake's property, location.
     * 
     * @returns void
     */
    public move(): void {
        this.location = this.nextHead();
        this.saveHistory();
    }

    public grow(): void {
        this.size++;
    }

    public staySameSize() {
        this.locations = this.locations.slice(1);
    }

    /**
     * Evaluates the snake's next location by adding the 
     * current location with a CardinalDirection.
     * 
     * @returns OrderedPair
     */
    private nextHead(): OrderedPair {
        let nextlocation = new OrderedPair(
            this.direction.x + this.location.x,
            this.direction.y + this.location.y
        );
        return nextlocation;
    }

    private saveHistory() {
        this.locations.push(this.location);
    }

    private nextBody(): void {
        this.locations.push(this.location);
    }

}

export { Snake };