const { mdc } = require(".");

// First Property
describe("when b > 0 and is a divider from a, then mdc(a,b) = b", () => {
  test("when a is a pair number", () => {
    let a = 6;
    let b = 3;
    let expectedValue = 3;

    expect(mdc(a, b)).toBe(expectedValue);
  });
  test("when a is a odd number", () => {
    let a = 9;
    let b = 3;
    let expectedValue = 3;

    expect(mdc(a, b)).toBe(expectedValue);
  });
});
