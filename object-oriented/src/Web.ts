import { GameLogic } from "./GameLogic";
import { Snake } from "./Snake";
import { CLI } from "./CLI";
import { Apple } from "./Apple";
import { CardinalDirections } from "./CardinalDirections";

class Web extends GameLogic {
    /**
     * Define the Web playable area.
     * @param number columns
     * @param number rows
     */
    constructor(columns: number, rows: number) {
        super(columns, rows);
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
}

export { Web };