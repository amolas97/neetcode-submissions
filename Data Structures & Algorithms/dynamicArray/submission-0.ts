class DynamicArray<T> {

    private arr:T[];
    private capacity: number; 
    private size: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        if(capacity > 0) {
            this.arr = new Array<T>(capacity).fill(null)
            this.size = 0;
            this.capacity = capacity;
        } 
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
        this.arr[this.size - 1] = null;
        this.size -= 1;
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newCapacity: number = this.capacity * 2
        const arrcp: T[] = [...this.arr]
        this.arr = [...arrcp, ...new Array<T>(this.capacity).fill(null)]
        this.capacity = newCapacity
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
