const base = require('./base');
Object.getOwnPropertyNames(base).map(p => global[p] = base[p]);

// Constants
const NORTH = {
	x: 0,
	y: -1
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
	x: -1,
	y: 0
};

/**
 * Identifies if the two ordered-pairs passed in are identical.
 * 
 * @param {*} orderedPairOne
 * @param {*} orderedPairTwo
 * @returns boolean
 */
const doPairsMatch = orderedPairOne => orderedPairTwo => 
	orderedPairOne.x == orderedPairTwo.x &&
	orderedPairOne.y == orderedPairTwo.y;

/**
 * Identifies if the snake will eat an apple.
 * 
 * @param {*} state 
 * @returns boolean
 */
const willEat = state => doPairsMatch(nextHead(state))(state.apple);

/**
 * Identifies if the snake will collide with itself.
 * 
 * @param {*} state
 * @returns boolean
 */
const willCollide = state => state.snake.find(doPairsMatch(nextHead(state)));

/**
 * Identifies if the user attempts to have the snake move on top of itself.
 * 
 * @param {*} move
 * @returns boolean
 */
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
 * If the snake will collide into itself then restart snake.
 * If the snake will not collide into itself:
 * * If the snake will eat an apple create a new head and concatenate the existing body.
 * * If not, create a new head and remove the last block to animate moving forward.
 * @param {*} state
 * @returns object {x: int, y: int}
 */
const nextSnake = state =>
	willCollide(state) ?
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

/**
 * Defines the initial state of the game.
 * 
 * @returns void
 */
const initialState = () => ({
	cols:  20,
	rows:  14,
	moves: [EAST],
	snake: [],
	apple: { x: 16, y: 2 }
});

/**
 * @returns void
 */
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