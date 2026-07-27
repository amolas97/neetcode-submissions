class ListNode {
    constructor(public val: number = null, public next: ListNode | null = null) {}
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if(this.size > 0) {
            if(index === this.size - 1) return this.tail.val;
            if(index === 0) return this.head.val;
            let current: ListNode = this.head;
            for(let i = 0; i < this.size; i++){ 
                if(index === i) return current.val;
                current = current.next;
            }
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const headNode = this.head;
        const node = new ListNode(val, headNode);
        this.head = node;
        this.size += 1;
        if(this.size === 1){
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new ListNode(val, null);
        if(this.tail) {
            const tailNode = this.tail;
            tailNode.next = node;
        }
        this.tail = node;
        this.size += 1;
        if(this.size === 1){
            this.head = node;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if(this.size > 0){
            let current: ListNode = this.head;
            let prev: ListNode = null;
            if(index === 0){
                this.head = current.next;
                this.size -= 1
                if(!this.head?.next){
                    this.tail = this.head
                }
                return true;
            }
            for(let i = 0; i < this.size; i++){ 
                if(index === i) {
                    prev.next = current.next;
                    current.next = null;
                    if(i === this.size - 1){
                        this.tail = prev;
                    }
                    this.size -= 1
                    return true;
                }
                prev = current;
                current = current.next;
            }
        }
        return false
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let current: ListNode = this.head;
        const numberArr: number[] = [];
        for(let i = 0; i < this.size; i++){ 
            numberArr.push(current.val)
            current = current.next;
        }
        return numberArr
    }
}
