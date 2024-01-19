//abstract calss

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log("cooking time for pizza is 30Mins");
  }
}

class Burger extends Food {
  constructor(title: string, public price: number, public location: string) {
    super(title);
  }
  getCookingTime(): void {
    console.log("cooking time for Burger is 15Mins");
  }
}

let pizza = new Pizza("neptune", 500);

console.log(pizza.title);
console.log(pizza.price);
pizza.getCookingTime();
