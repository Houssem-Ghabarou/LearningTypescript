"use strict";
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`this is the msg ${msg} and the value is ${this.value} `);
    }
}
let userOne = new User("houssem");
console.log(userOne.value);
userOne.show("this is user 1");
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("this is user 2");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let collectionOne = new Collection();
collectionOne.add({ title: "BookHoussem", price: 500, isbn: "85" });
collectionOne.add({ title: "BookNour", price: 600, isbn: "99" });
console.log(collectionOne);
//# sourceMappingURL=index.js.map