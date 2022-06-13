import { Ship } from "./ship";

export class Board {
    board: Array<Array<Ship>>;
    opponentBoard: Array<Array<boolean>>;

    constructor(board: Array<Array<Ship>>, opponentBoard: Array<Array<boolean>>) {
        this.board = board
        this.opponentBoard = opponentBoard;
    }
}