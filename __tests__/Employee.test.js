const Employee = require('../lib/Employee');

test('creates a employee object', ()=>{
    const employee = new Employee('Lisa', 1, 'e@t.com');

    expect(employee.fullName).toBe('Lisa');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@','.com'));
});

test("get employee's name", ()=>{
    const employee = new Employee('Lisa', 1, 'e@t.com');
    expect(employee.getName()).toBe('Lisa');
});

test("get employee's id", ()=>{
    const employee = new Employee('Lisa', 1, 'e@t.com');
    expect(employee.getId()).toBe(1);
});

test("get employee's email", ()=>{
    const employee = new Employee('Lisa', 1, 'e@t.com');
    expect(employee.getEmail()).toBe('e@t.com');
});

test("get employee's role", ()=>{
    const employee = new Employee('Lisa', 1, 'e@t.com');
    expect(employee.getRole() ).toBe('Employee');
});

