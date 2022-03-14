const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;

  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("set", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(3);
    cal.add(4);
    expect(cal.value).toBe(7);
  });

  it("subtract", () => {
    cal.set(8);
    cal.subtract(3);
    expect(cal.value).toBe(5);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(4);
    expect(cal.value).toBe(8);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});