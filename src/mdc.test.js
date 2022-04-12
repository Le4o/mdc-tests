const { mdc } = require(".");

// First Property
test("when b > 0 and is a divider from a, then mdc(a,b) = b", () => {
  expect(mdc(6, 3)).toBe(3);
});
