class ListNode {
    constructor(public val: number = 0, public prev: ListNode | null = null, public next: ListNode | null = null){}
}

class MyDeque {

    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size < 1
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const node = new ListNode(value, null, null);
        if(!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node; 
            this.tail = node
        }
        this.size += 1;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const node = new ListNode(value, null, null);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
        this.size += 1;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if(this.isEmpty()) return -1;
        const val = this.tail.val;
        const prev = this.tail.prev;
        if (prev) prev.next = null;
        else {
            this.head = prev;
        }
        this.tail = prev;
        this.size -= 1
        return val
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if(this.isEmpty()) return -1;
        const val = this.head.val;
        const next = this.head.next;
        if (next) next.prev = null; 
        else {
            this.tail = next;
        }
        this.head = next;
        this.size -= 1
        return val
    }
}
