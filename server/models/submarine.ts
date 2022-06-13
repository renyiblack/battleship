import { Ship } from "./ship";

export class Submarine extends Ship {
    constructor() {
        super('submarine', [
            [false, false, false, false, false, false],
            [false, true, true, true, true, false],
            [false, false, false, false, false, false]
        ]);
    }
}