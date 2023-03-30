const fs = require("fs");

function a_try() {
  fs.readFileSync("/a");
}

function run_a_try() {
  try {
    a_try();
    console.log("Error");
  } catch (e) {
    return { HelloMam: e };
  }
}

console.log(run_a_try());
console.log("water");
