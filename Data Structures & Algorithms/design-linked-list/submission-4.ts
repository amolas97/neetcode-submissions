class ListNode {
    constructor(public val: number = 0, public next: ListNode | null = null){}
}

class MyLinkedList {
    
    private head: ListNode | null;
    private tail: ListNode | null;
    private _size: number = 0

    get size(): number{
        return this._size;
    }
    
    constructor() {
        this.head = null
        this.tail = null;
        this._size = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if(index < 0 || index >= this._size) return -1;
        let node: ListNode | null = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const next: ListNode | null = this.head;
        const node: ListNode = new ListNode(val, next);
        if(!this.head) this.tail = node;
        this.head = node;
        this._size += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const node: ListNode = new ListNode(val, null);
        if(this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        this._size += 1;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if(index >= 0 && index <= this._size){
            if(index === this._size) this.addAtTail(val)
            else if (index === 0) this.addAtHead(val)
            else {
                let current = this.head;
                let prev = null;
                for(let i = 0; i < index; i++){
                    prev = current;
                    current = current.next;
                }
                const node = new ListNode(val, current);
                prev.next = node;
                this._size += 1;
            }
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if(index >= 0 && index < this._size){
            let current = this.head;
            let prev = null;
            for(let i = 0; i <= index; i++){
                let next = current.next;
                if(i === index){
                    if(prev) prev.next = next;
                    else this.head = next;
                    if(index === this._size - 1) {
                        this.tail = prev ?? this.head;
                    }
                }
                prev = current;
                current = next;
            }
            this._size -= 1;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
