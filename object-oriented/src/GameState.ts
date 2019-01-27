import { Snake } from "./Snake"
import { OrderedPair } from "./OrderedPair";

class GameState {
    public columns: number;
    public rows: number;
    public userInput: OrderedPair[];
    private snake: Snake;

    constructor(snake: Snake) {
        this.columns = 3;
        this.rows = 7;
        this.snake = snake;
    }
}

export { GameState };