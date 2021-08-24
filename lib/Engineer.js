const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(fullName, id, email, github) {
        super(fullName, id, email);
        this.github = github;
    };
    getRole(){
        return 'Engineer';
    };
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;