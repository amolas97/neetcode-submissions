class Coffee {
    /**
     * @returns {number}
     */
    getCost(): number {
        throw new Error('Method getCost() must be implemented.');
    }
}

class SimpleCoffee extends Coffee {
    /**
     * @returns {number}
     */
    getCost(): number {
        return 1.1;
    }
}

class CoffeeDecorator extends Coffee {
    protected decoratedCoffee: Coffee;
    /**
     * @param {Coffee} coffee
     */
    constructor(coffee: Coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    /**
     * @returns {number}
     */
    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 0.5
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 0.2
    }
}

class CreamDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 0.7
    }
}
