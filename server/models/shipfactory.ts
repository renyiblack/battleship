import { BattleShip } from "./battleship";
import { CargoShip } from "./cargoship";
import { Cruiser } from "./cruiser";
import { HydroPlane } from "./hydroplane";
import { Ship } from "./ship";
import { Submarine } from "./submarine";

export class ShipFactory {
    public static buildShipFromName(shipName: string): Ship {
        if (shipName == 'battleship') {
            return new BattleShip();
        }
        else if (shipName == 'cargoship') {
            return new CargoShip();
        }
        else if (shipName == 'cruiser') {
            return new Cruiser();
        }
        else if (shipName == 'hydroplane') {
            return new HydroPlane();
        }
        else if (shipName == 'submarine') {
            return new Submarine();
        } else {
            throw Error('Invalid ship');
        }
    }
}