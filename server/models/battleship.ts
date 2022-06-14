import { Block } from "./block";
import { Ship } from "./ship";

export class BattleShip extends Ship {
    constructor() {
        super('battleship', [
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true, 'battleship'), new Block(false, false, true, 'battleship'), new Block(false, false, true, 'battleship'), new Block(false, false, true, 'battleship'), new Block(false, false, true)],
            [new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true), new Block(false, false, true)]
        ]);
    }
}