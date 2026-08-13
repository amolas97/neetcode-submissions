class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    /**
     * @param {string} name
     */
    constructor(private name: string = "", private notifications: number = 0) {
        super();
    }

    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications(): number {
        return this.notifications;
    }
}

class OnlineStoreItem {

    private observers: Observer[];

    /**
     * @param {string} itemName
     * @param {number} stock
     */
    constructor(private itemName: string, private stock: number = 0) {
        this.observers = []
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer: Observer): void {
        this.observers.push(observer)
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer: Observer): void {
        const ind: number = this.observers.indexOf(observer)
        if(ind !== -1){
            this.observers.splice(ind, 1);
        }
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock: number): void {
        if(this.stock <= 0 && newStock > 0){
            for(let i = 0; i < this.observers.length; i++){
                const observer = this.observers[i];
                observer.notify(this.itemName);
            }
        }
        this.stock = newStock;
    }
}