import { GameObject } from "./GameObject";
import { CardinalDirections } from "./CardinalDirections";
import { OrderedPair } from "./OrderedPair";

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
     * Adds an OrderedPair to snake's property, location.
     * 
     * @returns void
     */
    public move(): void {
        this.location = this.nextHead();
        this.saveHistory();
    }

    /**
     * Increases the size variable that defines how large the snake by 
     * tell the game how many locations to keep.
     * 
     * @returns void
     */
    public grow(): void {
        this.size++;
    }

    /**
     * @returns void
     */
    public remainCurrentSize(): void {
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

    /**
     * Keep a history of the snake's position.
     * 
     * @returns void
     */
    private saveHistory(): void {
        this.locations.push(this.location);
    }

}

export { Snake };