class SquareHole {
    /**
     * @param {number} sideLength
     */
    constructor(private sideLength: number = 0) {}

    /**
     * @param {Square} square
     * @return {boolean}
     */
    canFit(square: Square): boolean {
        return this.sideLength >= square.getSideLength();
    }
}

class Square {
    /**
     * @param {number} sideLength
     */
    constructor(private sideLength: number = 0) {}

    /**
     * @return {number}
     */
    getSideLength(): number {
        return this.sideLength;
    }
}

class Circle {
    /**
     * @param {number} radius
     */
    constructor(private radius: number = 0) {}

    /**
     * @return {number}
     */
    getRadius(): number {
        return this.radius;
    }
}

class CircleToSquareAdapter extends Square {
    /**
     * @param {Circle} circle
     */
    constructor(private circle: Circle) {
        super();
    }

    /**
     * @return {number}
     */
    getSideLength(): number {
        return this.circle.getRadius() * 2
    }
}
