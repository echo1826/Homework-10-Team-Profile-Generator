const Intern = require("../lib/intern");

describe("Intern class", () => {
    describe("get role", () => {
        it("should return role", () => {
            const obj = new Intern("Ethan", 4, "ethan@me.com");
            expect(obj.getRole() === "Intern");
        });
    });
});