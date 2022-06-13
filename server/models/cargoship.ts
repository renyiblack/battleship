import { Ship } from "./ship";

export class CargoShip extends Ship {
    constructor() {
        super('cargoship', [
            [false, false, false, false, false, false, false],
            [false, true, true, true, true, true, false],
            [false, false, false, false, false, false, false]
        ]);
    }
}