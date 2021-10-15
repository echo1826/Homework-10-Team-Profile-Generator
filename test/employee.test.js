const Employee = require("../lib/employee");

describe("Employee class", () => {
    describe("get name", () => {
        it("should return name", () => {
            const obj = new Employee("Ethan", 4, "ethan@me.com");
            expect(obj.getName() === "Ethan");
        });
    });
    describe("get id", () => {
        it("should return id", () => {
            const obj = new Employee("Ethan", 4, "ethan@me.com");
            expect(obj.getId() === 4);
        });
    });
    describe("get role", () => {
        it("should return role", () => {
            const obj = new Employee("Ethan", 4, "ethan@me.com");
            expect(obj.getRole() === "Employee");
        });
    });
});