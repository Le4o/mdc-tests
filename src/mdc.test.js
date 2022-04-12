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

// Third Property
describe.each([
  [16, 0, 16],
  [15, 0, 15],
])(
  "considering that all numbers are factors of 0 then mdc(a, 0) = |a|",
  (a, b, expected) => {
    test(`given a=${a}, b=${b}`, () => {
      expect(mdc(a, b)).toBe(expected);
    });
  }
);

// Fourth Property
describe.each([
  [5, 6, 3, 15],
  [4, 6, 0, 24],
])(
  "if m is a non-negative integer then mdc(m*a, m*b) = m*mdc(a, b)",
  (m, a, b, expected) => {
    test(`given m=${m}, a=${a}, b=${b}`, () => {
      expect(mdc(m * a, m * b)).toBe(m * mdc(a, b));
    });
  }
);

// Fifth Property
describe.each([
  [5, 6, 2],
  [7, 2, 5],
])(
  "if mdc(a, b) = 1 then mdc(a*b, c) = mdc(a*b, c) = mdc(a, c) * mdc(b, c)",
  (a, b, c) => {
    test(`given a=${a}, b=${b} and c=${c}`, () => {
      expect(mdc(a * b, c)).toBe(mdc(a, c) * mdc(b, c));
    });
  }
);

// Sixth Property
describe.each([
  [1, 0],
  [4, 6],
])("mdc(a, b) = mdc(b, a)", (a, b) => {
  test(`given a=${a}, b=${b}`, () => {
    expect(mdc(a, b)).toBe(mdc(b, a));
  });
});

// Eighth Property
describe.each([[1], [4]])(
  "if a is a positive integer then mdc(a, a) = a",
  (a, expected) => {
    test(`given a=${a}`, () => {
      expect(mdc(a, a)).toBe(a);
    });
  }
);
