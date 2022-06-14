import { Ship } from "./ship";

export class PlayerPlacementJson {
    ship: Ship;
    x: number;
    y: number;

    constructor(ship: Ship, x: number, y: number) {
        this.ship = ship;
        this.x = x;
        this.y = y;
    }
}