class Meal {
    constructor(
        private cost: number = 0.0,
        private takeOut: boolean = false,
        private main: string = '',
        private drink: string = ''
    ) {}

    getCost(): number {
        return this.cost;
    }

    getTakeOut(): boolean {
        return this.takeOut;
    }

    getMain(): string {
        return this.main;
    }

    getDrink(): string {
        return this.drink;
    }

    setCost(cost: number): void {
        this.cost = cost;
    }

    setTakeOut(takeOut: boolean): void {
        this.takeOut = takeOut;
    }

    setMain(main: string): void {
        this.main = main;
    }

    setDrink(drink: string): void {
        this.drink = drink;
    }
}

class MealBuilder {
    private meal: Meal;
    
    constructor() {
        this.meal = new Meal();
    }

    /**
     * @param {number} cost
     * @return {MealBuilder}
     */
    addCost(cost: number): MealBuilder {
        this.meal.setCost(cost);
        return this;
    }

    /**
     * @param {boolean} takeOut
     * @return {MealBuilder}
     */
    addTakeOut(takeOut: boolean): MealBuilder {
        this.meal.setTakeOut(takeOut);
        return this;
    }

    /**
     * @param {string} main
     * @return {MealBuilder}
     */
    addMainCourse(main: string): MealBuilder {
        this.meal.setMain(main);
        return this;
    }

    /**
     * @param {string} drink
     * @return {MealBuilder}
     */
    addDrink(drink: string): MealBuilder {
        this.meal.setDrink(drink);
        return this;
    }

    /**
     * @return {Meal}
     */
    build(): Meal {
        return this.meal;
    }
}
