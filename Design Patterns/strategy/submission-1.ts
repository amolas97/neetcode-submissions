class Person {
    constructor(
        private lastName: string, 
        private age: number, 
        private married: boolean
    ) {}

    /**
     * @returns {string}
     */
    getLastName(): string {
        return this.lastName;
    }

    /**
     * @returns {number}
     */
    getAge(): number {
        return this.age;
    }

    /**
     * @returns {boolean}
     */
    isMarried(): boolean {
        return this.married;
    }
}

class PersonFilter {
    /**
     * @param {Person} person
     * @returns {boolean}
     */
    apply(person: Person): boolean {
        throw new Error("Abstract method 'apply' must be implemented.");
    }
}

class AdultFilter extends PersonFilter {
    apply(person: Person): boolean {
        return person.getAge() >= 18;
    }
}

class SeniorFilter extends PersonFilter {
    apply(person: Person): boolean {
        return person.getAge() >= 65;
    }
}

class MarriedFilter extends PersonFilter {
    apply(person: Person): boolean {
        return person.isMarried();
    }    
}

class PeopleCounter {

    private filter: PersonFilter;
    /**
     * @param {PersonFilter} filter
     */
    setFilter(filter: PersonFilter): void {
        if (!(filter instanceof PersonFilter)) {
            throw new Error('Filter must be an instance of PersonFilter');
        }
        this.filter = filter;
    }

    /**
     * @param {Person[]} people
     * @returns {number}
     */
    count(people: Person[]): number {
        let personCount = 0;
        for(let i = 0; i < people.length; i++){
            const person = people[i]
            if(this.filter.apply(person)) personCount += 1;
        }
        return personCount;
    }
}
