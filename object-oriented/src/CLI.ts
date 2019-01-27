import { GameState } from "./GameState";

class CLI {
    public gameCanvas: string[][];

    createCanvas(state: GameState) {
        let column = this.createArrayFromString(" · ", state.columns);
        let row = this.createMultiArray(column, state.rows);
        
        this.gameCanvas = row;
    }

    /**
     * Creates an array of any given string.
     * 
     * @param string item 
     * @param number numberOfItemsInArray 
     * @return createArrayFromString("+", 3) returns ["+", "+", "+"]
     */
    createArrayFromString(item: string, numberOfItemsInArray: number) {
        let columns: string[] = [];
        for (let index = 0; index < numberOfItemsInArray; index++) {
            columns[index] = item;
        }
        return columns;
        //return new Array(numberOfItemsInArray).fill(item);
    }

    /**
     * Creates an array of an given array.
     * 
     * @param string[] collection 
     * @param number numberOfArraysInArray
     * @return createMultiArray(["+", "+", "+"], 2) returns [ [ "+", "+", "+" ], [ "+", "+", "+" ] ]
     */
    createMultiArray(collection: string[], numberOfArraysInArray: number) {
        let columns: string[][] = [];
        for (let index = 0; index < numberOfArraysInArray; index++) {
            columns[index] = collection;
        }
        return columns;
        //return new Array(numberOfArraysInArray).fill(collection);
    }

    displayCanvas() {
        return this.gameCanvas.map(x=>x.concat("\r\n")).join("")
    }

    edit() {
        this.test = [[1,2,3], [4,3,2]];
        this.test[0][1] = 7;
    }

    addSnake() {

    }

}

export { CLI };