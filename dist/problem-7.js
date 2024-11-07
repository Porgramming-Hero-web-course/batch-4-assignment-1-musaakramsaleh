"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const age = 2024 - this.year;
            return age;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}
