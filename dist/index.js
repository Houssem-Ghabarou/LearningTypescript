"use strict";
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 16] = "Ten";
})(Kids || (Kids = {}));
var level;
(function (level) {
    level[level["Insane"] = 0] = "Insane";
    level[level["Kid"] = 16] = "Kid";
    level[level["Easy"] = 9] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = getHardSeconds()] = "Hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The level is ${lvl} and the the number of second is ${level.Hard}`);
}
//# sourceMappingURL=index.js.map