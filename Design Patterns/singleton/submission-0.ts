class Singleton {
    private static instance: Singleton;
    private val: string | null;
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        if(!Singleton.instance){
            Singleton.instance = this;
            this.val = null;
        }
        return Singleton.instance;
    }

    /**
     * @return {string}
     */
    getValue(): string {
        return this.val;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value: string): void {
        this.val = value;
    }
}
