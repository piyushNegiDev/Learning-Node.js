const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Sync... Blocking...
// fs.writeFileSync("./test.txt", "hello world");

// Async Non Blocking
// fs.writeFile("./test.txt", "Hello World", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

fs.appendFileSync("./test.txt", `hey there\n`);

fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docss/a/b", { recursive: true });

// console.log("1");
//Blocking...
const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

// console.log("1");
//Non Blocking...
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   console.log(result);
});
// console.log("2");
