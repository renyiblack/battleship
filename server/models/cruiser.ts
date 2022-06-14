import { Block } from "./block";
import { Ship } from "./ship";

export class Cruiser extends Ship {
    constructor() {
        super('cruiser', [
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true, 'cruiser'), new Block(false, false, true, 'cruiser'), new Block(false, false, true, 'cruiser'), new Block(false, false, true, 'cruiser'), new Block(false, false, true, 'cruiser'), new Block(false, false, true, 'cruiser'), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)]
        ]);
    }
}