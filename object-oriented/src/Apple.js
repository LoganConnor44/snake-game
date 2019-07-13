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
var OrderedPair_1 = require("./OrderedPair");
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    /**
     * Sets the name and immediately sets a random location.
     */
    function Apple() {
        var _this = _super.call(this) || this;
        _this.name = "Apple";
        _this.setLocation();
        return _this;
    }
    /**
     * Sets the Apple's location to a random OrderedPair.
     *
     * @todo Actually create a random location.
     * @returns void
     */
    Apple.prototype.setLocation = function () {
        this.location = new OrderedPair_1.OrderedPair(13, 1);
    };
    /**
     * Randomly moves the apple to a random location.
     *
     * @param number columns
     * @param number rows
     * @returns void
     */
    Apple.prototype.move = function (columns, rows) {
        this.location = new OrderedPair_1.OrderedPair(Math.floor(Math.random() * columns), Math.floor(Math.random() * rows));
    };
    return Apple;
}(GameObject_1.GameObject));
exports.Apple = Apple;
