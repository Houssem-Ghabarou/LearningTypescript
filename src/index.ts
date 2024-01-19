//class implements interface

interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

class User implements Settings {
  constructor(
    public username: string,
    public theme: boolean,
    public font: string
  ) {}
  save(): void {
    console.log("saved");
  }

  update(): void {
    console.log("update");
  }
}

let userOne = new User("houssem", true, "Open sans");

console.log(userOne.username);
console.log(userOne.font);

userOne.save();
userOne.update();
