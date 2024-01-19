"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("attacking now");
    }
}
class Draven extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("attacking now with axe");
        this.axeDurability = this.axeDurability - 1;
    }
}
class Jinx extends Player {
    constructor(name, gun) {
        super(name);
        this.gun = gun;
    }
    attack() {
        console.log("attacking now with gun");
        this.gun = this.gun - 1;
    }
}
let dravenPlayer = new Draven("DravenFrontline", 500);
console.log(dravenPlayer.name);
dravenPlayer.attack();
console.log(dravenPlayer.axeDurability);
//# sourceMappingURL=index.js.map