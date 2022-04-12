const mdc = (a, b) => {
  
  let rest;

  if (b > 0) {
    do {
      rest = a % b;
      a = b;
      b = rest;
    } while (rest !== 0);
  }

  return a;
};

module.exports = { mdc };

