export const BlockState = { empty: 0, occupied: 1, guessed: 2, hit: 3 }

export class Block {
    name;
    state;
    nextBlock;
    previousBlock;

    constructor(state = BlockState.empty, name = '', nextBlock, previousBlock) {
        this.name = name;
        this.state = state;
        this.nextBlock = nextBlock;
        this.previousBlock = previousBlock;
    }
}