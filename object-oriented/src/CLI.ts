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
    private gridDefinition: OrderedPair;

    constructor(state: GameState) {
        this.gridDefinition = new OrderedPair(state.columns, state.rows);
    }

    /**
     * Sets the gameCanvas as a multidimentional array.
     * 
     * @param GameState state 
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
     */
    displayCanvas() {
        return this.gameCanvas.map(x=>x.concat("\r\n").join("")).join("")
    }

    /**
     * Adds an apple to the gameCanvas.
     * 
     * @param OrderedPair location 
     */
    addApple(location: OrderedPair) {
        this.gameCanvas[location.x][location.y] = " @ ";
    }

    /**
     * Adds the snake to the gameCanvas.
     * 
     * @param   
     */
    addSnake(snake: Snake) {
        snake.locations.forEach(location => {
            this.gameCanvas[location.y][location.x] = " \u25A0 ";
        });
    }

    nextState(snake: Snake, apple: Apple) {
        snake.move();
        this.stayOnCanvas(snake);
        this.createCanvas();
        this.gameCanvas[snake.location.y][snake.location.x] = " \u25A0 ";
        this.gameCanvas[apple.location.y][apple.location.x] = " @ ";
    }

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