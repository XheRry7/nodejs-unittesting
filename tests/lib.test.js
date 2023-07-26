const lib = require("../lib");

// testing numbers
describe("absolute", () => {
  // for grouping tests that are similar to each other.
  it("should return a positive number if input is positive", () => {
    const res = lib.absolute(1);
    expect(res).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const res = lib.absolute(-1);
    expect(res).toBe(1);
  });

  it("should return a zero if input is zero", () => {
    const res = lib.absolute(0);
    expect(res).toBe(0);
  });
});

// testing strings
describe("greet", () => {
  it("should return a greet function", () => {
    const name = "Shehryar";
    const res = lib.greet(name);
    // expect(res).toMatch(/Shehryar/);    // using regex
    expect(res).toContain("Shehryar"); // using string
  });
});

// testing Arrays
describe("Currencies", () => {
  it("should return proper currencies", () => {
    const res = lib.getCurrencies();

    // too general
    expect(res).not.toBeNull();

    // too specific
    expect(res[0]).toContain("USD");
    expect(res[1]).toContain("AUD");
    expect(res[2]).toContain("EUR");

    // another too specific
    expect(res.length).toBe(3);

    // proper way
    expect(res).toContain("USD");
    expect(res).toContain("AUD");
    expect(res).toContain("EUR");

    // Ideal way
    expect(res).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

// testing objects
describe("get Products", () => {
  it("Should return the product with the given id", () => {
    const res = lib.getProduct(1);
    expect(res).toEqual({ id: 1, price: 10 });
    // toMatchObject: this matcher doesn't look for all the keys to present in the object
    expect(res).toMatchObject({ id: 1, price: 10 });

    // toHaveProperty: this will look for the key and its value that we specify in the brackets
    expect(res).toHaveProperty("id", 1);
  });
});


// falsy values in js : Null, undefined, NaN, '', 0, false


// testing exception
describe('registerUser', ()=>{
    it('should throw exception',()=>{
        expect(()=>{ lib.registerUser()}).toThrow('Username is required.')
    })
    it('should return an object',()=>{
        const res = lib.registerUser('Shehryar');
        expect(res).toHaveProperty("username", 'Shehryar')
    })
})