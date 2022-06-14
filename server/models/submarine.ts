import { Block } from "./block";
import { Ship } from "./ship";

export class Submarine extends Ship {
    constructor() {
        super('submarine', [
            [new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false)],
            [new Block(false, false), new Block(false, true), new Block(false, true), new Block(false, true), new Block(false, true), new Block(false, false)],
            [new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false), new Block(false, false)]
        ]);
    }
}