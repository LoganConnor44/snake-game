"use strict";
exports.__esModule = true;
var Snake_1 = require("./Snake");
var CLI_1 = require("./CLI");
var Apple_1 = require("./Apple");
var CardinalDirections_1 = require("./CardinalDirections");
var readline = require("readline");
// Create Game Objects
var snake = new Snake_1.Snake();
var apple = new Apple_1.Apple();
var cli = new CLI_1.CLI(14, 20);
// Prep Game Objects
cli.createCanvas();
cli.addSnake(snake);
cli.addApple(apple);
// Setup Console I/O
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', function (str, key) {
    translateUserInput(key);
});
// Display Game To Console
function displayGame() {
    console.log('\x1Bc' + cli.displayCanvas());
}
function displayScore() {
    console.log("Apples eaten: " + (snake.size - 1));
}
// Processes The User's Input
function translateUserInput(userInput) {
    if (userInput.ctrl && userInput.name === 'c') {
        process.exit();
    }
    switch (userInput.name.toUpperCase()) {
        case 'W':
        case 'K':
        case 'UP':
            snake.direction = CardinalDirections_1.CardinalDirections.North.value;
            break;
        case 'A':
        case 'H':
        case 'LEFT':
            snake.direction = CardinalDirections_1.CardinalDirections.West.value;
            break;
        case 'S':
        case 'J':
        case 'DOWN':
            snake.direction = CardinalDirections_1.CardinalDirections.South.value;
            break;
        case 'D':
        case 'L':
        case 'RIGHT':
            snake.direction = CardinalDirections_1.CardinalDirections.East.value;
            break;
    }
}
// Main Screen Logic
setInterval(function () {
    displayGame();
    displayScore();
    cli.nextState(snake, apple);
}, 125);
