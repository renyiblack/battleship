import { Block, BlockState } from "./block";
import { Ship } from "./ship";

export class BattleShip extends Ship {
    constructor(initialPos) {
        super('battleship', initialPos, [
            [new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'battleship', initialPos), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'battleship', initialPos.sumX(1), initialPos), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'battleship', initialPos.sumX(2), initialPos.sumX(1)), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'battleship', undefined, initialPos.sumX(2)), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied)]
        ], initialPos.subX(1).subY(1), initialPos.sumX(4).sumY(1));
    }
}