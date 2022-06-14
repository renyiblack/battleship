import { Block } from "./block";
import { Ship } from "./ship";

export class CargoShip extends Ship {
    constructor() {
        super('cargoship', [
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true, 'cargoship'), new Block(false, false, true, 'cargoship'), new Block(false, false, true, 'cargoship'), new Block(false, false, true, 'cargoship'), new Block(false, false, true, 'cargoship'), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)]
        ]);
    }
}