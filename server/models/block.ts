export class Block {
    name: string;
    isHit: boolean;
    hasGuessed: boolean;
    isSet: boolean;

    constructor(isHit: boolean, hasGuessed: boolean, isSet: boolean, name: string ='') {
        this.name = name;
        this.isHit = isHit;
        this.hasGuessed = hasGuessed;
        this.isSet = isSet;
    }
}