"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GameObject_1 = require("./GameObject");
var CardinalDirections_1 = require("./CardinalDirections");
var OrderedPair_1 = require("./OrderedPair");
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    /**
     * Initializes the snake with default values.
     */
    function Snake() {
        var _this = _super.call(this) || this;
        _this.name = "Snake";
        _this.location = new OrderedPair_1.OrderedPair(1, 1);
        _this.locations = [_this.location];
        _this.direction = CardinalDirections_1.CardinalDirections.East.value;
        _this.size = 1;
        return _this;
    }
    /**
     * Adds an OrderedPair to snake's property, location.
     *
     * @returns void
     */
    Snake.prototype.move = function () {
        this.location = this.nextHead();
        this.saveHistory();
    };
    /**
     * Increases the size variable that defines how large the snake by
     * tell the game how many locations to keep.
     *
     * @returns void
     */
    Snake.prototype.grow = function () {
        this.size++;
    };
    /**
     * @returns void
     */
    Snake.prototype.remainCurrentSize = function () {
        this.locations = this.locations.slice(1);
    };
    /**
     * Evaluates the snake's next location by adding the
     * current location with a CardinalDirection.
     *
     * @returns OrderedPair
     */
    Snake.prototype.nextHead = function () {
        var nextlocation = new OrderedPair_1.OrderedPair(this.direction.x + this.location.x, this.direction.y + this.location.y);
        return nextlocation;
    };
    /**
     * Keep a history of the snake's position.
     *
     * @returns void
     */
    Snake.prototype.saveHistory = function () {
        this.locations.push(this.location);
    };
    return Snake;
}(GameObject_1.GameObject));
exports.Snake = Snake;
