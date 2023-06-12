const addition = require("../calc");
 // first test 
describe("Calculator", () => {
    describe("Addition function", () => {
        // first test 
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        // second test 
        test("should return 73 for 42 +31", () => {
            expect(addition(42, 31)).toBe(73)
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});
