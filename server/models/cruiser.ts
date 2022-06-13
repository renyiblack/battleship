import { Ship } from "./ship";

export class Cruiser extends Ship {
    constructor() {
        super('cruiser', [
            [false, false, false, false, false, false, false, false],
            [false, true, true, true, true, true, true, false],
            [false, false, false, false, false, false, false, false]
        ]);
    }
}