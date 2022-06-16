export class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sumX(value) {
        return new Point(this.x + value, this.y);
    }
    sumY(value) {
        return new Point(this.x, this.y + value);
    }
    subX(value) {
        return new Point(this.x - value, this.y);
    }
    subY(value) {
        return new Point(this.x, this.y - value);
    }
}