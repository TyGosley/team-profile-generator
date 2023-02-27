const Manager = require("../lib/Manager");

test("Manager", () => {
    const employee = new Manager("Steve Rogers", 198, "please-use-paper-pencil@Avengers.com", 1);

    expect(employee.name).toEqual("Steve Rogers");
    expect(employee.id).toEqual(198);
    expect(employee.email).toEqual("please-use-paper-pencil@Avengers.com");
    expect(employee.getRole()).toEqual("Manager");
    expect(employee.getofficeNumber()).toEqual(1);
})