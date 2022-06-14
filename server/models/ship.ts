import { Block } from "./block";

export class Ship {
    name: String;
    blocks: Array<Array<Block>>;

    constructor(name: String, blocks: Array<Array<Block>>) {
        this.name = name;
        this.blocks = blocks;
    }
}