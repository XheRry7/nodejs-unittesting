const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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
describe("registerUser", () => {
  it("should throw exception", () => {
    expect(() => {
      lib.registerUser(null);
    }).toThrow("Username is required.");
  });
  it("should return an object", () => {
    const res = lib.registerUser("Shehryar");
    expect(res).toHaveProperty("username", "Shehryar");
  });
});

// testing mock functions
describe("mock function testing", () => {
  db.getCustomerSync = function (id) {
    console.log("Reading fake customers...");
    return { id: id, points: 11 };
  };
  it("should give 10% discount to the users", () => {
    const order = {
      customerId: 1,
      totalPrice: 10,
    };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

// mock functions jest
describe("NotifyCustomers", () => {
  db.getCustomerSync = jest.fn().mockReturnValue({email: 'a'})
  mail.send = jest.fn()

  lib.notifyCustomer({ customerId: 1 });

  expect(mail.send).toHaveBeenCalled();
  expect(mail.send.mock.calls[0][1]).toMatch(/order/)
});
