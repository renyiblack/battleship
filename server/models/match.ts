import { Board } from "./board";
import { Player } from "./player";
import { Ship } from "./ship";

export class Match {
    id: string;
    private _p1: Player;
    private _p2: Player | undefined;

    public get p1(): Player {
        return this._p1;
    }

    public set p1(value: Player) {
        this._p1 = value;
    }

    public get p2(): Player | undefined {
        return this._p2;
    }

    public set p2(value: Player | undefined) {
        this._p2 = value;
    }

    public get hasP2(): boolean {
        return !(this._p2 === undefined);
    }

    constructor(id: string, p1: Player, p2: Player | undefined) {
        this.id = id;
        this._p1 = p1;
        this._p2 = p2;
    }

    private isP1(id: string): boolean {
        return this.p1.id === id;
    }

    private isP2(id: string): boolean {
        return this.p2?.id === id;
    }

    public placeShip(id: string, ship: Ship, x: number, y: number): boolean {
        if (this.isP1(id)) {
            return this._p1.placeShip(ship, x, y);
        } else if (this.isP2(id)) {
            return this._p2!.placeShip(ship, x, y);
        }
        else {
            throw Error('Invalid player!');
        }
    }
    public guessShip(id: string, x: number, y: number): boolean {
        if (this.isP1(id)) {
            let isSet: boolean = this.p2!.board.board[x][y].isSet;
            this._p1.board.guess(x, y, isSet);
            return isSet;
        } else if (this.isP2(id)) {
            let isSet: boolean = this.p1.board.board[x][y].isSet;
            this._p2!.board.guess(x, y, isSet);
            return isSet;
        }
        else {
            throw Error('Invalid player!');
        }
    }
}