import { GameLogic } from "./GameLogic";
import { GameState } from "./GameState";
import { Snake } from "./Snake";
import { CLI } from "./CLI";
import { Apple } from "./Apple";
let readline = require("readline");

// Create Game Objects
let logic = new GameLogic();
let snake = new Snake();
let apple = new Apple();
let state = new GameState(snake);
let cli = new CLI();

// Prep Game Objects
cli.createCanvas(state); 
cli.addSnake(snake.direction);
cli.addApple(apple.location);

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

// Processes The User's Input
function translateUserInput(userInput: any) {
    if (userInput.ctrl && userInput.name === 'c') {
		process.exit();
	}
	switch (userInput.name.toUpperCase()) {
		case 'W': 
		case 'K': 
        case 'UP':    
            console.log("the user typed up");
			//State = Snake.enqueue(State, Snake.NORTH); 
			break;
		case 'A':
		case 'H':
		case 'LEFT':
			//State = Snake.enqueue(State, Snake.WEST);
			break;
		case 'S':
		case 'J':
		case 'DOWN':
			//State = Snake.enqueue(State, Snake.SOUTH);
			break;
		case 'D':
		case 'L':
		case 'RIGHT':
			//State = Snake.enqueue(State, Snake.EAST);
			break;
	}
}

// Main Screen Logic
setInterval(() => {
	displayGame() 
}, 80);