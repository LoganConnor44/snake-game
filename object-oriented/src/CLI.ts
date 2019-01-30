import { GameState } from "./GameState";
import { OrderedPair } from "./OrderedPair";
import { Snake } from "./Snake";
import { CardinalDirections } from "./CardinalDirections";
import { Apple } from "./Apple";

class CLI {
    /**
     * A matrix/grid to represent the game canvas.
     * NOTE: When assigning x and y values the think of the inner
     *       array as y, and the outer as x. The grid's north and 
     *       south directions may be mixed.
     * @var string[][]
     */
    public gameCanvas: string[][];

    /**
     * Defines the GameCanvas.
     * @var OrderedPair
     */
    private gridDefinition: OrderedPair;

    /**
     * Define the CLI playable area.
     * @param GameState state
     */
    constructor(state: GameState) {
        this.gridDefinition = new OrderedPair(state.columns, state.rows);
    }

    /**
     * Sets the gameCanvas as a multidimentional array based on the gridDefinitions.
     * 
     * @returns void
     */
    public createCanvas(): void {
        this.gameCanvas = [];
        for(let i = 0; i < this.gridDefinition.x; i++) {
            this.gameCanvas[i] = [];
            for(let j = 0; j < this.gridDefinition.y; j++) {
                this.gameCanvas[i][j] = " · ";
            }
        }
    }

    /**
     * Returns the gameCanvas as a string with return carriages and removing unnecessary commas. 
     * 
     * @retuns string
     * @returns void
     */
    public displayCanvas(): string{
        return this.gameCanvas.map(x=>x.concat("\r\n").join("")).join("")
    }


    /**
     * Adds the snake to the gameCanvas.
     * 
     * @param Snake snake
     * @returns void
     */
    public addSnake(snake: Snake): void {
        snake.locations.forEach(location => {
            this.gameCanvas[location.y][location.x] = " \u25A0 ";
        });
    }

    public addApple(apple: Apple) {
        this.gameCanvas[apple.location.y][apple.location.x]= " @ ";
    }

    /**
     * Creates the next state of the game.
     * 
     * @param Snake snake 
     * @param Apple apple 
     * @returns void
     */
    public nextState(snake: Snake, apple: Apple): void {
        
        snake.move();
        this.stayOnCanvas(snake);
        this.createCanvas();
        if (!this.doPairsMatch(snake.location, apple.location)) {
            snake.staySameSize();
        } else {
            snake.grow();
            apple.move();
        }
        this.addApple(apple);
        this.addSnake(snake);
    }

    /**
     * Identifies if the two ordered-pairs passed in are identical.
     * 
     * @param OrderedPair orderedPairOne
     * @param OrderedPair orderedPairTwo
     * @returns Boolean
     */
    doPairsMatch(orderedPairOne: OrderedPair, orderedPairTwo: OrderedPair): Boolean {
        return orderedPairOne.x == orderedPairTwo.x &&
            orderedPairOne.y == orderedPairTwo.y;
    }

    /**
     * Keeps the snake in the game boundary.
     * 
     * @param Snake snake 
     * @returns void
     */
    private stayOnCanvas(snake: Snake): void {
        let xBoundary = this.gameCanvas[0].length - 1;
        let yBoundary = this.gameCanvas.length - 1; 
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
    }
}

export { CLI };