const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countRepeat = (word) => {
  let charArr = word.split("");
  let count = 0;
  let prev = "";
  while (charArr.length) {
    let shifChar = charArr.shift();
    if (shifChar === prev) {
      count++;
      prev = "";
    } else {
      prev = shifChar;
    }
  }
  console.log("Output\n", count);
};

readline.question(`Input\n`, (inputText) => {
  countRepeat(inputText);
  readline.close();
});
