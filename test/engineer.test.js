const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    describe("get role", () => {
        it("should return role", () => {
            const obj = new Engineer("Ethan", 4, "ethan@me.com");
            expect(obj.getRole() === "Engineer");
        });
    });
});