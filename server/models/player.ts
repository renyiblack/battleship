import { Socket } from "socket.io";
import { Board } from "./board";

export class Player {
    id: string;
    socket: Socket;
    board: Board;

    constructor(id: string, socket: Socket) {
        this.id = id;
        this.socket = socket;
        this.board = new Board([], []);
    }
}