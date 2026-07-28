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

    Print(): string {
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
        const tempQueue = new MyQueue();
        if(this.queue.IsEmpty()){
            this.queue.Enqueue(x);
        } else {
            console.log("separation");
            let queueSize = this.queue.size;
            for(let i = 0; i < queueSize; i++){
                const val = this.queue.Dequeue();
                console.log(val);
                console.log(i + "i", this.queue.Print())
                tempQueue.Enqueue(val);
                console.log(i + "ii", tempQueue.Print())
            }
            this.queue.Enqueue(x);
            console.log(this.queue.Print())
            console.log("separation2");
            let tempQueueSize = tempQueue.size;
            for(let j = 0; j < tempQueueSize; j++){
                const val2 = tempQueue.Dequeue();
                this.queue.Enqueue(val2)
                console.log(j + "j", tempQueue.Print())
            }
            console.log("separation3");
        }
        console.log(this.queue.Print())
        
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
