const { mdc } = require(".");

// First Property
describe.each([
  [6, 3, 3],
  [9, 3, 3],
])(
  "when b > 0 and is a divider from a, then mdc(a,b) = b",
  (a, b, expected) => {
    test(`given a=${a}, b=${b}`, () => {
      expect(mdc(a, b)).toBe(expected);
    });
  }
);

// Second Property
describe.each([
  [16, 8, 4],
  [15, 5, 5],
])(
  "any number that is a commons divisor of a and b is also a divisor of mdc(a, b)",
  (a, b, divisor) => {
    test(`given a=${a}, b=${b}`, () => {
      expect(mdc(a, b) % divisor).toBe(0);
    });
  }
);
