import { Ship } from "./ship";

export class BattleShip extends Ship {
    constructor() {
        super('battleship', [
            [false, false, false, false, false, false],
            [false, true, true, true, true, false],
            [false, false, false, false, false, false]
        ]);
    }
}