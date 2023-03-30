const glob = require("glob");
const fs = require("fs");
const path = require("path");

const testPath = path.join(__dirname + "/");

const withFS = fs.readdirSync(testPath);
console.log("With FS", withFS);

const withGlob = glob.globSync(testPath + "/*", { absolute: false });
console.log("With Glob", withGlob);
