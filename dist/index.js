"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("cooking time for pizza is 30Mins");
    }
}
class Burger extends Food {
    constructor(title, price, location) {
        super(title);
        this.price = price;
        this.location = location;
    }
    getCookingTime() {
        console.log("cooking time for Burger is 15Mins");
    }
}
let pizza = new Pizza("neptune", 500);
console.log(pizza.title);
console.log(pizza.price);
pizza.getCookingTime();
//# sourceMappingURL=index.js.map