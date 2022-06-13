
export class Ship {
    name: String;
    blocks: Array<Array<boolean>>;

    constructor(name: String, size: Array<Array<boolean>>){
        this.name = name;
        this.blocks = size;
    }
}