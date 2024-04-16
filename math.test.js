const { add, substract, divide, multiply } = require("./math");

describe("Math.js tests", () => {
  it("should test add ", () => {
    expect(add(2, 2)).toBe(4);
  });
  it("should test substract ", () => {
    expect(substract(2, 2)).toBe(0);
  });
  it("should test divide ", () => {
    expect(divide(2, 2)).toBe(1);
  });
  it("should test multiply ", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
