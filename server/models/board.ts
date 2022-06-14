import { Block } from "./block";

export class Board {
    private _board: Array<Array<Block>>;
    private _opponentBoard: Array<Array<Block>>;

    constructor(board: Array<Array<Block>>, opponentBoard: Array<Array<Block>>) {
        this._board = board
        this._opponentBoard = opponentBoard;
    }

    public get board(): Array<Array<Block>> {
        return this._board;
    }

    public set board(value: Array<Array<Block>>) {
        this._board = value;
    }

    public get opponentBoard(): Array<Array<Block>> {
        return this._opponentBoard;
    }

    public set opponentBoard(value: Array<Array<Block>>) {
        this._opponentBoard = value;
    }

    public guess(x: number, y: number): boolean {
        this._opponentBoard[x][y].hasGuessed = true;
        if (this._opponentBoard[x][y].isSet && this._opponentBoard[x][y].name) {
            this._opponentBoard[x][y].isHit = true;
        }
        return this._opponentBoard[x][y].isHit;
    }
}