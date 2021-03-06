import { OrderedPair } from "./OrderedPair";

/**
 * A mock enum class to easily retrieve cardinal directions.
 */
class CardinalDirections {
    static North = new CardinalDirections(
        "North", 
        new OrderedPair(0, -1) 
    );
    static South = new CardinalDirections(
        "South",
        new OrderedPair(0, 1)
    );
    static East = new CardinalDirections(
        "East",
        new OrderedPair(1, 0)
    );
    static West = new CardinalDirections(
        "West",
        new OrderedPair(-1, 0)
    );

    /**
     * Private constructor to disallow creating other instances of this type.
     * 
     * @param _key 
     * @param _value 
     */
    private constructor(private _key: string, private _value: OrderedPair) {
    }

    /**
     * Only set value.
     * 
     * @retuns object
     */
    public get value(): OrderedPair {
        return this._value;
    }

    /**
     * Override the base method to implicitly print the enum name/key.
     * 
     * @returns string
     */
    toString(): string {
        return this._key;
    }
}

export { CardinalDirections };