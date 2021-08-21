const Intern = require('../lib/Intern');

test('creates a intern object', ()=>{
    const intern = new Intern('Wendy', 3, 'e@t3.com', 'UoT');

    expect(intern.name).toBe('Wendy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@','.com'));
    expect(intern.school).toEqual(expect.any(String));

});

test("get intern's role", ()=>{
    const intern = new Intern('Wendy', 3, 'e@t3.com', 'UoT');
    expect(intern.getRole()).toBe('Intern');
});

test("get intern's school", ()=>{
    const intern = new Intern('Wendy', 3, 'e@t3.com', 'UoT');
    expect(intern.getSchool()).toBe('UoT');
});