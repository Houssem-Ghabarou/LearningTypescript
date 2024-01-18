//procedure , void function

//never function ; never return anything

function logging(msg: string): void {
  console.log(msg);
  return;
}

console.log(logging("Hello World"));

const fail = (msg: string) => {
  throw new Error(msg);
  return 1;
};

function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

alwaysLog("Hello World");
console.log("houssem");
