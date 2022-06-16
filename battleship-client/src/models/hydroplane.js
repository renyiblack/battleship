import { Block, BlockState } from "./block";
import { Ship } from "./ship";

export class HydroPlane extends Ship {
    constructor(initialPos) {
        super('hydroplane', initialPos, [
            [new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'hydroplane', initialPos), new Block(BlockState.occupied), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied, 'hydroplane', initialPos.sumX(1).sumY(1), initialPos.sumX(2)), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied, 'hydroplane', undefined, initialPos.sumX(1).sumY(1)), new Block(BlockState.occupied), new Block(BlockState.occupied)],
            [new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied), new Block(BlockState.occupied)]
        ], initialPos.subX(1).subY(1), initialPos.sumX(3).sumY(1));
    }
}