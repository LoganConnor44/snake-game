import { GameObject } from "./GameObject";
import { OrderedPair } from "./OrderedPair";

class Apple extends GameObject {
    /**
     * Defines the location of the Apple.
     * @var OrderedPair
     */
    public location: OrderedPair;

    /**
     * Sets the name and immediately sets a random location.
     */
    constructor() {
        super();
        this.name = "Apple";
        this.setLocation();
    }

    /**
     * Sets the Apple's location to a random OrderedPair.
     * 
     * @todo Actually create a random location.
     * @returns void
     */
    public setLocation() {
        this.location = new OrderedPair(13, 1);
    }

    /**
     * Randomly moves the apple to a random location.
     * 
     * @param number columns 
     * @param number rows
     * @returns void
     */
    public move(columns: number, rows: number): void {
        this.location = new OrderedPair(
            Math.floor(Math.random() * columns), 
            Math.floor(Math.random() * rows)
        );
    }
}

export { Apple };