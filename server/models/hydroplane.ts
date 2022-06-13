import { Ship } from "./ship";

export class HydroPlane extends Ship {
    constructor() {
        super('hydroplane', [
            [false, false, false, false, false],
            [false, false, true, false, false],
            [false, true, false, true, false],
            [false, false, false, false, false]
        ]);
    }
}