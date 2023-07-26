const exercise1 = require("../exercise1");

describe("fizz Buzz exercise", () => {
  it("should  throw exception", () => {
    expect(() => {
      exercise1.fizzBuzz("a")
    }).toThrow();
  });
  it("should return FizzBuzz for the number divisible by 3", () => {
    const res = exercise1.fizzBuzz(15);
    expect(res).toBe("FizzBuzz");
  });
  it("should return Fizz if the number is divisible by 3", () => {
    const res = exercise1.fizzBuzz(9);
    expect(res).toBe("Fizz");
  });
  it("Should return if the number is  divisible by 5", () => {
    const res = exercise1.fizzBuzz(10);
    expect(res).toBe("Buzz");
  });
  it('should return the input if the input is neither divisible by 3 or 5 or by both.',()=>{
    const res = exercise1.fizzBuzz(8);
    expect(res).toBe(8);
  })
});
