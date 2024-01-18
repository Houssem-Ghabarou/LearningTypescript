"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Hello World"));
const fail = (msg) => {
    throw new Error(msg);
    return 1;
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Hello World");
console.log("houssem");
//# sourceMappingURL=index.js.map