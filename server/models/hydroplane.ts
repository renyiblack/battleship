import { Block } from "./block";
import { Ship } from "./ship";

export class HydroPlane extends Ship {
    constructor() {
        super('hydroplane', [
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true, 'hydroplane'), new Block(false, false, true), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true, 'hydroplane'), new Block(false, false, true), new Block(false, false, true, 'hydroplane'), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)]
        ]);
    }
}