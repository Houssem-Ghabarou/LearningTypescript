// enum type

const EASY = 15;
const MEDIUM = 10;
const HARD = 5;

enum level {
  Easy = 15,
  Medium = 10,
  Hard = 5,
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(
    `The level is ${lvl} and the the number of second is ${level.Easy}`
  );
}
