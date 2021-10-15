const Manager = require("../lib/manager");

describe("Manager class", () => {
    describe("get role", () => {
        it("should return role", () => {
            const obj = new Manager("Ethan", 4, "ethan@me.com");
            expect(obj.getRole() === "Manager");
        });
    });
});