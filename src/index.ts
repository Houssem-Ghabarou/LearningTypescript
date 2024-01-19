class User<T = string> {
  constructor(public value: T) {}

  show(msg: T): void {
    console.log(`this is the msg ${msg} and the value is ${this.value} `);
  }
}

let userOne = new User("houssem");
console.log(userOne.value);
userOne.show("this is user 1");

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("this is user 2");

//generic interfaces

interface Book {
  title: string;
  price: number;
  isbn: string;
}
class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

let collectionOne = new Collection<Book>();

collectionOne.add({ title: "BookHoussem", price: 500, isbn: "85" });
collectionOne.add({ title: "BookNour", price: 600, isbn: "99" });

console.log(collectionOne);
