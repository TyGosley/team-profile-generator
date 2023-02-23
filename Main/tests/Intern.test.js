const Intern = require("../lib/Intern");

test("Intern", () => {
    const employee = new Intern("Peter Parker", 23, "webslingerlovesburritos@esu.com", "Empire State University");

    expect(employee.name).toEqual("Peter Parker");
    expect(employee.id).toEqual(23);
    expect(employee.email).toEqual("webslingerlovesburritos@esu.com");
    expect(employee.getRole()).toEqual("Intern");
    expect(employee.getSchool()).toEqual("Empire State University");
})