"use strict";
exports.__esModule = true;
var OrderedPair_1 = require("./OrderedPair");
/**
 * A mock enum class to easily retrieve cardinal directions.
 */
var CardinalDirections = /** @class */ (function () {
    /**
     * Private constructor to disallow creating other instances of this type.
     *
     * @param _key
     * @param _value
     */
    function CardinalDirections(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    Object.defineProperty(CardinalDirections.prototype, "value", {
        /**
         * Only set value.
         *
         * @retuns object
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Override the base method to implicitly print the enum name/key.
     *
     * @returns string
     */
    CardinalDirections.prototype.toString = function () {
        return this._key;
    };
    CardinalDirections.North = new CardinalDirections("North", new OrderedPair_1.OrderedPair(0, -1));
    CardinalDirections.South = new CardinalDirections("South", new OrderedPair_1.OrderedPair(0, 1));
    CardinalDirections.East = new CardinalDirections("East", new OrderedPair_1.OrderedPair(1, 0));
    CardinalDirections.West = new CardinalDirections("West", new OrderedPair_1.OrderedPair(-1, 0));
    return CardinalDirections;
}());
exports.CardinalDirections = CardinalDirections;
