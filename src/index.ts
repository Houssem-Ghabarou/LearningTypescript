//polymorphism

class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log("attacking now");
  }
}

class Draven extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("attacking now with axe");
    this.axeDurability = this.axeDurability - 1;
  }
}

class Jinx extends Player {
  constructor(name: string, public gun: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("attacking now with gun");
    this.gun = this.gun - 1;
  }
}

let dravenPlayer = new Draven("DravenFrontline", 500);

console.log(dravenPlayer.name);
dravenPlayer.attack();
console.log(dravenPlayer.axeDurability);
