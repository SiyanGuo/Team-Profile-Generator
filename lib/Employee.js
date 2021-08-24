class Employee {
    constructor(fullName, id, email) {
        this.fullName = fullName;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.fullName;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    
    getRole(){
        return 'Employee';
    }
};

module.exports = Employee;