const abs = (n) => {
  if (n < 0) return n * -1;
  return n;
};

const mdc = (a, b) => {
  let rest;
  a = abs(a);
  b = abs(b);

  if (b > 0) {
    do {
      rest = a % b;
      a = b;
      b = rest;
    } while (rest !== 0);
  }

  return a;
};

module.exports = { mdc, abs };
