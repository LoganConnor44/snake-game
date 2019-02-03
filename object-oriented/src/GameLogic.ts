import { Snake } from "./Snake";
import { OrderedPair } from "./OrderedPair";

// class GameLogic {

//     /**
//      * Defines the state of the current game.
//      * @var GameState
//      */
//     public currentState: GameState;

//     /**
//      * Identifies if the two ordered-pairs passed in are identical.
//      * 
//      * @param OrderedPair orderedPairOne
//      * @param OrderedPair orderedPairTwo
//      * @returns Boolean
//      */
//     doPairsMatch(orderedPairOne: OrderedPair, orderedPairTwo: OrderedPair): Boolean {
//         return orderedPairOne.x == orderedPairTwo.x &&
//             orderedPairOne.y == orderedPairTwo.y;
//     }

//     /**
//      * Identifies if the user attempts to have the snake move on top of itself.
//      * 
//      * @param OrderedPair userInput
//      * @param GameState state
//      * @returns Boolean
//      */
//     isDirectionValid(userInput: OrderedPair, state: GameState): Boolean {
//         return state.userInput[0].x + userInput.x != 0 || 
//             state.userInput[0].y + userInput.y != 0;
//     }

//     /**
//      * Creates a queu of the users actions.
//      * 
//      * If the direction is valid, merge an update of the array into the state object via spread operator.
//      * @param OrderedPair userInput 
//      * @param GameState state
//      * @returns GameState
//      */
//     queueUserInput(userInput: OrderedPair, state: GameState) {
//         if (this.isDirectionValid(userInput, state)) {
//             var newInput = { 
//                 userInput: state.userInput.concat([userInput])
//             };
//             // rework this part so returning GameState is allowed by type check
//             return {...state, ...newInput};
//         }
//         return state;
//     }
// }

abstract class GameLogic {

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
    protected gridDefinition: OrderedPair;

    constructor(columns: number, rows: number) {
        this.gridDefinition = new OrderedPair(columns, rows);
    }

    /**
     * Identifies if the two ordered-pairs passed in are identical.
     * 
     * @param OrderedPair orderedPairOne
     * @param OrderedPair orderedPairTwo
     * @returns Boolean
     */
    protected didSnakeEat(orderedPairOne: OrderedPair, orderedPairTwo: OrderedPair): Boolean {
        return orderedPairOne.x == orderedPairTwo.x &&
            orderedPairOne.y == orderedPairTwo.y;
    }

    /**
     * Identifies if the snake head touches any other part of its body.
     * 
     * @param Snake snake
     * @returns Boolean
     */
    protected didSnakeEatItself(snake: Snake): Boolean {
        if (snake.size > 1) {
            let bodyLocations = snake.locations.slice(
                0,
                snake.locations.length -1 
            );
            if (bodyLocations.find(location => 
                location.x == snake.location.x && 
                location.y == snake.location.y)) {
                return true;
            }
        }
        return false;
    }
}

export { GameLogic };