"use strict";
function returnType(val) {
    return val;
}
const returnArrowType = (val) => {
    return val;
};
const test = (val) => {
    return `the value is ${val} and the type is ${typeof val}`;
};
console.log(returnType(100));
console.log(returnType("houssem"));
console.log(returnType(true));
console.log(returnType([100, 200, 300, 400]));
console.log(test(500));
console.log(test("houssem"));
const multipleValues = (val1, val2) => {
    return `the first value is ${val1} and the second value is ${val2}`;
};
console.log(multipleValues(500, true));
console.log(multipleValues("houssem", [1, 2, 3]));
//# sourceMappingURL=index.js.map