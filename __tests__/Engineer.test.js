const Engineer = require('../lib/Engineer');

test('creates a engineer object', ()=>{
    const engineer = new Engineer('Mark', 4, 'e@t4.com', 'MarkLee');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@','.com'));
    expect(engineer.github).toEqual(expect.any(String));

});

test("get engineer's role", ()=>{
    const engineer = new Engineer('Mark', 4, 'e@t4.com', 'MarkLee');
    expect(engineer.getRole()).toBe('Engineer');
});

test("get engineer's github", ()=>{
    const engineer = new Engineer('Mark', 4, 'e@t4.com', 'MarkLee');
    expect(engineer.getGithub()).toBe('MarkLee');
});