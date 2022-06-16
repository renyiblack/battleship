import { BattleShip } from "./battleship";
import { CargoShip } from "./cargoship";
import { Cruiser } from "./cruiser";
import { HydroPlane } from "./hydroplane";
import { Submarine } from "./submarine";

export class ShipFactory {
    static buildShipFromName(shipName, point) {
        if (shipName == 'battleship') {
            return new BattleShip(point);
        }
        else if (shipName == 'cargoship') {
            return new CargoShip(point);
        }
        else if (shipName == 'cruiser') {
            return new Cruiser(point);
        }
        else if (shipName == 'hydroplane') {
            return new HydroPlane(point);
        }
        else if (shipName == 'submarine') {
            return new Submarine(point);
        } else {
            throw Error('Invalid ship');
        }
    }
}