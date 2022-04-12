const mdc = (a, b) => {
  if (b > 0 && a % b === 0) return b;
  return a;
};

module.exports = { mdc };
