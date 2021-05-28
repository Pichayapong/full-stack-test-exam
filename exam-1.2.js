const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cashChange = (amount) => {
  const cash = [1, 5, 10, 20, 50, 100];
  let ans = Infinity;
  const rc = (amt, num, cix) => {
    if (!amt) {
      ans = num
    } else if (amt > 0 && ~cix) {
      let n = Math.ceil(amt / cash[cix]);
      if (n + num >= ans) {
        return;
      }
      while (~n) {
        rc(amt - n * cash[cix], num + n--, cix - 1);
      }
    }
  };
  rc(amount, 0, cash.length - 1);
  console.log("Output\n", ans);
};

readline.question(`Input\n`, (inputVal) => {
  cashChange(Number(inputVal));
  readline.close();
});
