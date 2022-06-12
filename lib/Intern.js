const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role)

        this.school = school
    }
}

module.exports = Intern