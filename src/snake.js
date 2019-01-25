const base = require('./base');
Object.getOwnPropertyNames(base).map(p => global[p] = base[p]);

// Constants
const NORTH = {
	x: 0,
	y:-1
};
const SOUTH = {
	x: 0,
	y: 1
};
const EAST = {
	x: 1,
	y: 0
};
const WEST = {
	x:-1,
	y: 0
};

// Point operations
const doPointsEqual = pointOne => pointTwo => 
	pointOne.x == pointTwo.x &&
	pointOne.y == pointTwo.y;

// Booleans
const willEat = state => doPointsEqual(nextHead(state))(state.apple);
const willCrash = state => state.snake.find(doPointsEqual(nextHead(state)));
const isValidMove = move => state =>
	state.moves[0].x + move.x != 0 || 
	state.moves[0].y + move.y != 0;

// Next values based on state
const nextMoves = state => 
	state.moves.length > 1 ? 
	dropFirst(state.moves) :
	state.moves;
const nextApple = state => 
	willEat(state) ?
	randomPosition(state) :
	state.apple;

/**
 * Identifies the next grid position of the snake head.
 * 
 * If the snake does not exist create it.
 * If the snake does exist calculate the x and y positions via the modulus operator.
 * Calculate by the column/row and the sum of their respective axis current state and cardinal direction.
 * @param {*} state 
 * @returns object {x: int, y: int}
 */
const nextHead = state =>
	state.snake.length == 0 ?
	{
		x: 2,
		y: 2
	} :
	{
		x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
		y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
	};

/**
 * Identifies the next location of the snake body.
 * 
 * If the snake will crash into itself then restart snake.
 * @param {*} state
 * @returns object {x: int, y: int}
 */
const nextSnake = state =>
	willCrash(state) ?
	[] :
	(
		willEat(state) ?
		[nextHead(state)].concat(state.snake) :
		[nextHead(state)].concat(dropLast(state.snake))
	);

// Randomness
const randomPosition = table => ({
	x: rnd(0)(table.cols - 1),
	y: rnd(0)(table.rows - 1)
});

// Initial state
const initialState = () => ({
	cols:  20,
	rows:  14,
	moves: [EAST],
	snake: [],
	apple: { x: 16, y: 2 }
});

const next = spec({
	rows:  prop('rows'),
	cols:  prop('cols'),
	moves: nextMoves,
	snake: nextSnake,
	apple: nextApple
});

const enqueue = (state, move) =>
	isValidMove(move)(state) ?
	merge(state)({ moves: state.moves.concat([move]) }) :
	state;

module.exports = {
	EAST,
	NORTH,
	SOUTH,
	WEST,
	initialState,
	enqueue,
	next
};