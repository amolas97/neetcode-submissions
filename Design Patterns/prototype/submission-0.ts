abstract class Shape {
    /**
     * @return {Shape}
     */
    abstract clone(): Shape
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(private width: number = 0, private height: number = 0) {
        super();
    }

    /**
     * @return {number}
     */
    getWidth(): number {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight(): number {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone(): Rectangle {
        return new Rectangle(
            this.width,
            this.height
        )
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(private length: number = 0) {
        super();
    }

    /**
     * @return {number}
     */
    getLength(): number {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone(): Square {
        return new Square(
            this.length
        )
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes: Shape[]): any[] {
        let res = [] 
        for(let i = 0; i < shapes.length; i++){
            res.push(shapes[i].clone())
        }
        return res;
    }
}
