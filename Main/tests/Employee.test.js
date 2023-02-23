const Employee = require("../lib/Employee");

test("Employee", () => {
    const employee = new Employee("Tyler", 25, "ty@aol.com");

    expect(employee.name).toEqual("Tyler");
    expect(employee.id).toEqual(25);
    expect(employee.email).toEqual("ty@aol.com");
    expect(employee.getRole()).toEqual("Employee");
})

