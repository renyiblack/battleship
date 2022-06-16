export class Ship {
    name;
    initialPos;
    topLeft;
    bottomRight;
    blocks;
    isflipped = false;

    constructor(name, initialPos, blocks, topLeft, bottomRight) {
        this.name = name;
        this.initialPos = initialPos;
        this.blocks = blocks;
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
}