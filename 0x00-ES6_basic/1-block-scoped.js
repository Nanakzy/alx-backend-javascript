export default function taskBlock(trueOrFalse) {
  let task = false;  // Declare using `let` for block scope
  let task2 = true;  // Declare using `let` for block scope

  if (trueOrFalse) {
    let task = true;  // Declare using `let` to create a new variable within the block
    let task2 = false; // Declare using `let` to create a new variable within the block
  }

  return [task, task2];
}
