"use strict";
class User {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log("saved");
    }
    update() {
        console.log("update");
    }
}
let userOne = new User("houssem", true, "Open sans");
console.log(userOne.username);
console.log(userOne.font);
userOne.save();
userOne.update();
//# sourceMappingURL=index.js.map