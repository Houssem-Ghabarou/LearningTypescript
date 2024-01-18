type button = {
  up: string;
  down: string;
  left: string;
  right: string;
};

type last = button & {
  x: boolean;
};
function getActions(btns: last) {
  console.log(btns.up);
  console.log(btns.down);
  console.log(btns.left);
  console.log(btns.right);
}

getActions({ up: "up", down: "down", left: "left", right: "right", x: true });
