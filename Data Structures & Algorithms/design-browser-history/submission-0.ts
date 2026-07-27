class NodeList {
    constructor(public val: string = "", public prev: NodeList | null = null, public next: NodeList | null = null){}
}

class DoubleLinkedList {
    private _size: number;
    private head: NodeList | null;
    private tail: NodeList | null;

    constructor(){
        this._size = 0;
        this.head = null;
        this.tail = null
    }

    get size(): number {
        return this._size;
    }

    get(index: number): NodeList | null{
        if(index < 0 || index >= this._size){
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current;
    }

    add(val: string): void{
        if(!this.head){
            this.head = new NodeList(val, null, null)
            this.tail = this.head;
        } else {
            const node = new NodeList(val, this.tail, null);
            this.tail.next = node;
            this.tail = node;
        }
        this._size += 1
    }

    sliceAt(index: number): void{
        if(index < 0 || index >= this._size){
            throw new Error("Index out of bounds");
        }
        let current: NodeList | null = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        current.next = null
        this.tail = current;
        this._size = index + 1 
    }

}

class BrowserHistory {
    private history: DoubleLinkedList;
    private currentIndex: number;

    constructor(homepage: string) {
        this.history = new DoubleLinkedList();
        this.history.add(homepage);
        this.currentIndex = 0;
    }

    visit(url: string): void {
        this.history.sliceAt(this.currentIndex);
        this.history.add(url)
        this.currentIndex += 1;
    }

    back(steps: number): string {
        let current: NodeList = this.history.get(this.currentIndex);
        let rsteps = steps;
        while(this.currentIndex > 0 && rsteps > 0){
            current = current.prev
            this.currentIndex -= 1;
            rsteps -= 1; 
        }
        return current.val;
    }

    forward(steps: number): string {
        let current: NodeList = this.history.get(this.currentIndex);
        let rsteps = steps;
        while(this.currentIndex < this.history.size - 1 && rsteps > 0){
            current = current.next
            this.currentIndex += 1;
            rsteps -= 1; 
        }
        return current.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */