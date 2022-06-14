import { Block } from "./block";

export class Board {
    private _board: Array<Array<Block>>;
    private _opponentBoard: Array<Array<boolean>>;

    constructor(board: Array<Array<Block>>, opponentBoard: Array<Array<boolean>>) {
        this._board = board
        this._opponentBoard = opponentBoard;
    }

    public get board(): Array<Array<Block>> {
        return this._board;
    }

    public set board(value: Array<Array<Block>>) {
        this._board = value;
    }

    public get opponentBoard(): Array<Array<boolean>> {
        return this._opponentBoard;
    }

    public set opponentBoard(value: Array<Array<boolean>>) {
        this._opponentBoard = value;
    }

    public guess(x: number, y: number, value: boolean): void {
        this._opponentBoard[x][y] = value;
    }
}