import express from 'express';
import { Match } from './models/match';
import { Player } from './models/player';
import { v4 as uuidv4 } from 'uuid';
import { Socket, Server } from 'socket.io';
import { createServer } from 'http';
import { PlayerPlacementJson as PlayerPlacementJson } from './models/player_placement_json';
import { Ship } from './models/ship';
import { PlayerGuessJson } from './models/player_guess_json';
import { ShipFactory } from './models/shipfactory';

const app = express();
const PORT = process.env.PORT || 3000
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    },
});

var matchs: Array<Match> = new Array<Match>();

io.on('connection', (socket: Socket) => {
    console.log('client connected: ', socket.id)
    if (matchs.find((m: Match) => m.p1.socket === socket || m.p2?.socket === socket) === undefined) {
        let player: Player = new Player(uuidv4(), socket);
        let matchNumber = matchs.length;
        let message = 'Waiting for player 2!\n';
        let matchId = uuidv4();

        if (matchNumber == 0) {
            matchs.push(new Match(matchId, player, undefined));
            socket.emit('id', player.id);
        } else {
            let match = matchs.at(matchs.length - 1)!;
            if (!match.hasP2) {
                match.p2 = new Player(uuidv4(), socket);
                socket.emit('id', match.p2.id);
                matchId = match.id;
                message = 'Starting Match!';
            }
            else {
                matchs.push(new Match(matchId, player, undefined));
            }

            matchNumber = matchs.length;
        }


        let match = matchs.at(matchs.length - 1)!;


        socket.join('match' + matchId);
        io.to('match' + matchId).emit('message', message + '\nMatch id = ' + matchId);

        socket.on('disconnect', (reason: any) => {
            console.log(reason);
        })

        socket.on("place", (json: string) => {
            console.log(json);

            let playerPlacementJson: PlayerPlacementJson = JSON.parse(json);

            if (match.placeShip(playerPlacementJson.id, ShipFactory.buildShipFromName(playerPlacementJson.shipName), playerPlacementJson.x, playerPlacementJson.y)) {
                socket.emit('success');
            }
            else {
                throw Error('Invalid placement');
            }
        });

        socket.on("guess", (json: string) => {
            let playerGuessJson: PlayerGuessJson = JSON.parse(json);
            let message: string = (match.guessShip(playerGuessJson.id, playerGuessJson.x, playerGuessJson.y));
            socket.emit(message);
        });
    }

})


server.listen(PORT, () => {
    console.log('Server running on Port ', PORT)
})