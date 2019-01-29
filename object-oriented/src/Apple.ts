import { GameObject } from "./GameObject";
import { OrderedPair } from "./OrderedPair";

class Apple extends GameObject {
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
     * @returns void
     */
    public setLocation() {
        this.location = new OrderedPair(13, 1);
    }
}

export { Apple };