import { Snake } from "./Snake";
import { CLI } from "./CLI";
import { Apple } from "./Apple";
import { CardinalDirections } from "./CardinalDirections";
let readline = require("readline");

// Create Game Objects
let snake = new Snake();
let apple = new Apple();
let cli = new CLI(14,20);

// Prep Game Objects
cli.createCanvas(); 
cli.addSnake(snake);
cli.addApple(apple);

// Setup Console I/O
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    translateUserInput(key);
});

// Display Game To Console
function displayGame() {
    console.log(
        '\x1Bc' + cli.displayCanvas()
    );
}

function displayScore() {
	console.log(
		"Apples eaten: " + (snake.size - 1)
	);
}

// Processes The User's Input
function translateUserInput(userInput: any) {
    if (userInput.ctrl && userInput.name === 'c') {
		process.exit();
	}
	switch (userInput.name.toUpperCase()) {
		case 'W': 
		case 'K': 
        case 'UP':
            snake.direction = CardinalDirections.North.value;
			break;
		case 'A':
		case 'H':
		case 'LEFT':
            snake.direction = CardinalDirections.West.value;
			break;
		case 'S':
		case 'J':
		case 'DOWN':
            snake.direction = CardinalDirections.South.value;
			break;
		case 'D':
		case 'L':
		case 'RIGHT':
            snake.direction = CardinalDirections.East.value;
			break;
	}
}

// Main Screen Logic
setInterval(() => {
	displayGame();
	displayScore();
	cli.nextState(snake, apple);
}, 125);