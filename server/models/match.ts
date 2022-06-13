import { Player } from "./player";

export class Match {
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

    constructor(p1: Player, p2: Player | undefined) {
        this._p1 = p1;
        this._p2 = p2;
    }
}