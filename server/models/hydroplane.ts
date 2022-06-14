import { Block } from "./block";
import { Ship } from "./ship";

export class HydroPlane extends Ship {
    constructor() {
        super('hydroplane', [
            [new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false)],
            [new Block(false, false), new Block(false, false), new Block(false, true), new Block(false, false), new Block(false, false)],
            [new Block(false, false), new Block(false, true), new Block(false, false), new Block(false, true), new Block(false, false)],
            [new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false)]
        ]);
    }
}