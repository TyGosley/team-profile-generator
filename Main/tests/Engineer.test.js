const Engineer = require("../lib/Engineer");

test("Engineer", () => {
    const employee = new Engineer("Tony Stark", 53, "jarvisIsMyHomeboy@stark.com", "IamIronMan");

    expect(employee.name).toEqual("Tony Stark");
    expect(employee.id).toEqual(53);
    expect(employee.email).toEqual("jarvisIsMyHomeboy@stark.com");
    expect(employee.getRole()).toEqual("Engineer");
    expect(employee.getGithub()).toEqual("IamIronMan");
})
