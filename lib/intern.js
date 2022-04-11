const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Get methods from Employee class
        super(name, id, email);
        // Get school
        this.school = school;
    }    

    getSchool() {
        return this.school;

    };

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;