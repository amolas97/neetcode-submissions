class MinStack<T> {
    private stack: T[];
    private min : T[];
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: T): void {
        if(!this.stack.length || val <= this.min[this.min.length - 1]){
            this.min.push(val);
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        const elementDeleted = this.stack.pop();
        if(elementDeleted === this.min[this.min.length - 1]){
            this.min.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): T {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): T {
        return this.min[this.min.length - 1];
    }
}
