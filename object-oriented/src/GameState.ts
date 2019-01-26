class GameState {
    public columns: number;
    public rows: number;
    public userInput: OrderedPair[];
    private snake: Snake;

    constructor(snake: Snake) {
        this.columns = 20;
        this.rows = 14;
        this.snake = snake;
    }
}