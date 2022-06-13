import express from 'express';
import { Match } from './models/match';
import { Player } from './models/player';
import { v4 as uuidv4 } from 'uuid';
import { Socket } from 'socket.io';

const app = express();
const socketIo = require('socket.io')
const http = require('http')
const PORT = process.env.PORT || 3000
const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: '*'
    }
})

var matchs: Array<Match> = new Array<Match>();

io.on('connection', (socket: Socket) => {
    console.log('client connected: ', socket.id)
    if (matchs.find((m: Match) => m.p1.socket === socket || m.p2?.socket === socket) === undefined) {
        let player: Player = new Player(uuidv4(), socket);
        let matchNumber = matchs.length;
        let message = 'Waiting for player 2!';

        if (matchNumber == 0) {
            matchs.push(new Match(player, undefined));
        } else {
            let match = matchs.at(matchs.length - 1)!;
            if (!match.hasP2) {
                match.p2 = new Player(uuidv4(), socket);
                message = 'Starting Match!';
            }
            else {
                matchs.push(new Match(player, undefined));
            }

            matchNumber = matchs.length;
        }

        socket.join('match' + matchNumber);
        io.to('match' + matchNumber).emit('message', message)
        socket.on('disconnect', (reason: any) => {
            console.log(reason)
        })
    }

})

server.listen(PORT, (err: any) => {
    if (err) console.log(err)
    console.log('Server running on Port ', PORT)
})