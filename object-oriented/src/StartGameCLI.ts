import { GameLogic } from "./GameLogic";
import { GameState } from "./GameState";
import { Snake } from "./Snake";
import { CLI } from "./CLI";
import { Apple } from "./Apple";
let readline = require("readline");

let logic = new GameLogic();
let snake = new Snake();
let apple = new Apple();
let state = new GameState(snake);
let cli = new CLI();


console.log(logic);
console.log(snake);
console.log(state);
console.log(cli);

cli.createCanvas(state); 
cli.addSnake(snake.direction);
cli.addApple(apple.location);

console.log(
    cli.displayCanvas()
);