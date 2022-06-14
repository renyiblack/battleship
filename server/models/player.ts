import { Socket } from "socket.io";
import { Block } from "./block";
import { Board } from "./board";
import { Ship } from "./ship";

export class Player {
    id: string;
    socket: Socket;
    board: Board;

    constructor(id: string, socket: Socket) {
        this.id = id;
        this.socket = socket;
        this.board = new Board([], []);
    }

    public placeShip(ship: Ship, x: number, y: number): boolean {
        let board = this.board.board;
        const endingX = ship.blocks.length;
        const endingy = ship.blocks[0].length;
        let isFirstMatch = true;
        let shipX = 0;
        let shipY = 0;
        for (let bx = 0; bx < board.length; bx++) {
            for (let by = 0; by < board[0].length; by++) {
                if ((bx >= x && bx <= endingX) && (by >= y && by <= endingy)) {
                    if (board[bx][by].isSet) {
                        return false;
                    }
                    else {
                        if (isFirstMatch) {
                            shipX = bx;
                            shipY = by;
                            isFirstMatch = false;
                        }
                        board[bx][by] = ship.blocks[bx - shipX][by - shipY];
                    }
                }
            }
        }

        this.board.board = board;
        return true;
    }

}