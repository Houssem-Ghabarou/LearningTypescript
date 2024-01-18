"use strict";
const EASY = 15;
const MEDIUM = 10;
const HARD = 5;
var level;
(function (level) {
    level[level["Easy"] = 15] = "Easy";
    level[level["Medium"] = 10] = "Medium";
    level[level["Hard"] = 5] = "Hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The level is ${lvl} and the the number of second is ${level.Easy}`);
}
//# sourceMappingURL=index.js.map