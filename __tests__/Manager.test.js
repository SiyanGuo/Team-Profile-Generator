const Manager = require('../lib/Manager');

test('creates a manager object', ()=>{
    const manager = new Manager('Irene', 2, 'e@t2.com', 804);

    expect(manager.name).toBe('Irene');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('.com'));
    expect(manager.officeNum).toEqual(expect.any(Number));

});

test("get manager's role", ()=>{
    const manager = new Manager('Irene', 2, 'e@t2.com', 804);
    expect(manager.getRole()).toBe('Manager');
});