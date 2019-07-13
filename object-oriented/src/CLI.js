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
var GameLogic_1 = require("./GameLogic");
var CLI = /** @class */ (function (_super) {
    __extends(CLI, _super);
    /**
     * Define the CLI playable area.
     * @param number columns
     * @param number rows
     */
    function CLI(columns, rows) {
        return _super.call(this, columns, rows) || this;
    }
    /**
     * Sets the gameCanvas as a multidimentional array based on the gridDefinitions.
     *
     * @returns void
     */
    CLI.prototype.createCanvas = function () {
        this.gameCanvas = [];
        for (var i = 0; i < this.gridDefinition.x; i++) {
            this.gameCanvas[i] = [];
            for (var j = 0; j < this.gridDefinition.y; j++) {
                this.gameCanvas[i][j] = " · ";
            }
        }
    };
    /**
     * Returns the gameCanvas as a string with return carriages and removing unnecessary commas.
     *
     * @retuns string
     * @returns void
     */
    CLI.prototype.displayCanvas = function () {
        return this.gameCanvas.map(function (x) { return x.concat("\r\n").join(""); }).join("");
    };
    /**
     * Adds the snake to the gameCanvas.
     *
     * @param Snake snake
     * @returns void
     */
    CLI.prototype.addSnake = function (snake) {
        var _this = this;
        snake.locations.forEach(function (location) {
            _this.gameCanvas[location.y][location.x] = " \u2610 ";
        });
    };
    /**
     * Adds the apple to the gameCanvas.
     *
     * @param Apple apple
     * @returns void
     */
    CLI.prototype.addApple = function (apple) {
        this.gameCanvas[apple.location.y][apple.location.x] = " @ ";
    };
    /**
     * Creates the next state of the game.
     *
     * @param Snake snake
     * @param Apple apple
     * @returns void
     */
    CLI.prototype.nextState = function (snake, apple) {
        snake.move();
        this.stayOnCanvas(snake);
        this.createCanvas();
        if (!this.didSnakeEat(snake.location, apple.location)) {
            snake.remainCurrentSize();
        }
        else {
            snake.grow();
            apple.move(this.gameCanvas[0].length, this.gameCanvas.length);
        }
        if (this.didSnakeEatItself(snake)) {
            snake.size = 1;
            snake.locations = [snake.location];
        }
        this.addApple(apple);
        this.addSnake(snake);
    };
    /**
     * Keeps the snake in the game boundary.
     *
     * @param Snake snake
     * @returns void
     */
    CLI.prototype.stayOnCanvas = function (snake) {
        var xBoundary = this.gameCanvas[0].length - 1;
        var yBoundary = this.gameCanvas.length - 1;
        if (snake.location.x > xBoundary) {
            snake.location.x = 0;
        }
        if (snake.location.x < 0) {
            snake.location.x = xBoundary;
        }
        if (snake.location.y > yBoundary) {
            snake.location.y = 0;
        }
        if (snake.location.y < 0) {
            snake.location.y = yBoundary;
        }
    };
    return CLI;
}(GameLogic_1.GameLogic));
exports.CLI = CLI;
