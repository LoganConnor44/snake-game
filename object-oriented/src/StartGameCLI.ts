import { GameLogic } from "./GameLogic";
import { GameState } from "./GameState";
import { Snake } from "./Snake";
import { CLI } from "./CLI";
let readline = require("readline");

let logic = new GameLogic();
let snake = new Snake();
let state = new GameState(snake);
let cli = new CLI();


console.log(logic);
console.log(snake);
console.log(state);
console.log(cli);

cli.createCanvas(state); 
cli.edit();

console.log(
    cli.displayCanvas()
);