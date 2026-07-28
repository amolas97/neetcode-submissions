class ListNode {
    constructor(public val: number = 0, public next: ListNode | null = null ){}
}

class MyQueue {

    private _size: number;
    private head: ListNode;
    private tail: ListNode;

    get size(): number {
        return this._size;
    }

    constructor(){
        this.tail = null;
        this.head = null;
        this._size = 0;
    }

    Enqueue(val: number) {
        const node: ListNode = new ListNode(val, null);
        if(!this.tail) this.head = node;
        else this.tail.next = node;
        this.tail = node;
        this._size++;
    }

    Dequeue(): number {
        if(!this.head) return -1;
        const prev = this.head;
        this.head = this.head.next
        prev.next = null;
        if(this._size === 1){
            this.tail = this.head;
        }
        this._size--;
        return prev.val;
    }

    Peek(): number | undefined {
        if(!this.head) return undefined;
        return this.head.val;
    }

    IsEmpty(): boolean {
        return this._size === 0;
    }

    toString(): string {
        let str = "["
        let current: ListNode = this.head;
        for(let i = 0; i < this.size; i++){
            str += ` ${current.val}`
            if(i === this.size - 1) break;
            str += ","
            current = current.next;
        }
        str += ` ] size: ${this.size}, head: ${this.head?.val}, tail: ${this.tail?.val}`
        return str;
    }

}

class MyStack {
    private queue: MyQueue;

    constructor() {
        this.queue = new MyQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        const queueSizeBefore = this.queue.size;
        
        this.queue.Enqueue(x);
        for(let i = 0; i < queueSizeBefore; i++){
            this.queue.Enqueue(this.queue.Dequeue())
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue.Dequeue();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue.Peek();
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.IsEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
