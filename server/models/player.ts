import { Socket } from "socket.io";

export class Player {
    id: string;
    socket: Socket;

    constructor(id: string, socket: Socket) {
        this.id = id;
        this.socket = socket;
    }
}