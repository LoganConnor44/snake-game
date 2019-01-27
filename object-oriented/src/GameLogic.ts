import { GameState } from "./GameState"; 
import { OrderedPair } from "./OrderedPair";

class GameLogic {

    /**
     * @var GameState
     */
    public currentState: GameState;

    /**
     * Identifies if the two ordered-pairs passed in are identical.
     * 
     * @param OrderedPair orderedPairOne
     * @param OrderedPair orderedPairTwo
     * @returns boolean
     */
    doPairsMath(orderedPairOne: OrderedPair, orderedPairTwo: OrderedPair) {
        return orderedPairOne.x == orderedPairTwo.x &&2
            orderedPairOne.y == orderedPairTwo.y;
    }

    /**
     * Identifies if the user attempts to have the snake move on top of itself.
     * 
     * @param OrderedPair userInput
     * @param GameState state
     * @returns boolean
     */
    isDirectionValid(userInput: OrderedPair, state: GameState) {
        return state.userInput[0].x + userInput.x != 0 || 
            state.userInput[0].y + userInput.y != 0;
    }

    /**
     * Creates a queu of the users actions.
     * 
     * If the direction is valid, merge an update of the array into the state object via spread operator.
     * @param OrderedPair userInput 
     * @param GameState state
     * @returns GameState
     */
    queueUserInput(userInput: OrderedPair, state: GameState) {
        if (this.isDirectionValid(userInput, state)) {
            var newInput = { 
                userInput: state.userInput.concat([userInput])
            };
            return {...state, ...newInput};
        }
        return state;
    }
}

export { GameLogic };