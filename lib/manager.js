const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Get methods from Employee class
        super(name, id, email);
        // Get office number
        this.officeNumber = officeNumber;
    }    

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;