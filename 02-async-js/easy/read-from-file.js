const fs = require("fs");

async function readFile() {
  fs.readFile(__dirname + "/docs/text.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
  const sum = await calculateSum(10000000000);
  console.log(sum);
}

async function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

readFile();
console.log("I am outside");
