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
