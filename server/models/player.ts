import { Socket } from "socket.io";
import { BlockState } from "./block";
import { Board } from "./board";
import { Ship } from "./ship";

export class Player {
    id: string;
    socket: Socket;
    board: Board;

    constructor(id: string, socket: Socket) {
        this.id = id;
        this.socket = socket;
        this.board = Board.fromXY(10, 10);
    }

    public placeShip(ship: Ship): boolean {
        /// Deep copy
        let board = JSON.parse(JSON.stringify(this.board.board));


        console.log(ship.topLeft.x + " " + ship.topLeft.y);
        console.log(ship.bottomRight.x + " " + ship.bottomRight.y);

        let shipX = 0;
        let shipY = 0;

        try {
            for (let x = ship.topLeft.x; x <= ship.bottomRight.x; x++) {
                for (let y = ship.topLeft.y; y <= ship.bottomRight.y; y++) {
                    if (board[x][y].state == BlockState.occupied) {
                        /// block already occupied, invalid move
                        console.log("already occupied");
                        return false;
                    }
                    else {
                        board[x][y] = ship.blocks[shipX][shipY];
                    }
                    shipY++;
                }
                shipX++;
                shipY = 0;
            }

            this.board.board = board;

            console.log(this.board.board);

            return true;
        } catch (error) {
            /// ship can't fit
            console.log("ship can't fit");
            return false;
        }
    }
}