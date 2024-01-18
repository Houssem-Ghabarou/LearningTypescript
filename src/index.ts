// enum type

function getHardSeconds(): number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 16,
}
enum level {
  Insane,
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds(),
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(
    `The level is ${lvl} and the the number of second is ${level.Hard}`
  );
}
