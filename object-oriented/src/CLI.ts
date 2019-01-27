import { GameState } from "./GameState";
import { OrderedPair } from "./OrderedPair";
import { CardinalDirections } from "./CardinalDirections";

class CLI {
    /**
     * A matrix/grid to represent the game canvas.
     * @var string[][]
     */
    public gameCanvas: string[][];

    /**
     * Sets the gameCanvas as a multidimentional array.
     * 
     * @param GameState state 
     * @returns void
     */
    createCanvas(state: GameState) {
        this.gameCanvas = [];
        for(let i = 0; i < state.columns; i++) {
            this.gameCanvas[i] = [];
            for(let j = 0; j < state.rows; j++) {
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
     * @param OrderedPair direction 
     */
    addSnake(direction: OrderedPair) {
        this.gameCanvas[direction.x][direction.y] = " \u25A0 ";
    }
}

export { CLI };