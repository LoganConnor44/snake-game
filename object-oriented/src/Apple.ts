import { GameObject } from "./GameObject";
import { OrderedPair } from "./OrderedPair";

class Apple extends GameObject {
    public location: OrderedPair;

    constructor() {
        super();
        this.name = "Apple";
        this.setLocation();
    }

    public setLocation() {
        this.location = this.randomLocation();
    }

    public randomLocation() {
        return new OrderedPair(1, 11);
    }

}

export { Apple };