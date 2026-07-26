class DynamicArray<T> {

    private arr: (T | undefined)[];
    private capacity: number; 
    private size: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        if(capacity <= 0) {
            throw new Error("Capacity must be greater than zero");
        } 
        this.arr = new Array<T>(capacity).fill(undefined)
        this.size = 0;
        this.capacity = capacity;
        
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): T {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: T): void {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: T): void {
        if(this.capacity === this.size){
            this.resize()
        }
        this.arr[this.size] = n
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback(): T {
        const lastElement: T = this.arr[this.size - 1];
        this.arr[this.size - 1] = undefined;
        this.size -= 1;
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newCapacity: number = this.capacity * 2
        let newArr = new Array<T>(newCapacity).fill(undefined)
        for(let i = 0; i < this.size; i++){
            newArr[i] = this.arr[i]
        }
        this.arr = newArr;
        this.capacity = newCapacity;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
