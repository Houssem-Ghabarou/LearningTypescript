//Generics

function returnType<T>(val: T): T {
  return val;
}

const returnArrowType = <T>(val: T): T => {
  return val;
};

const test = <T>(val: T): string => {
  return `the value is ${val} and the type is ${typeof val}`;
};
console.log(returnType<number>(100));
console.log(returnType<string>("houssem"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([100, 200, 300, 400]));

console.log(test<number>(500));
console.log(test<string>("houssem"));
const multipleValues = <T, S>(val1: T, val2: S): string => {
  return `the first value is ${val1} and the second value is ${val2}`;
};

console.log(multipleValues<number, boolean>(500, true));
console.log(multipleValues<string, number[]>("houssem", [1, 2, 3]));
