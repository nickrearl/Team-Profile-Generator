const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Mark', '42', 'mark@company.com', 'engineer', 'markcode')

    expect(engineer.name).toBe('Mark')
    expect(engineer.id).toBe('42')
    expect(engineer.email).toBe('mark@company.com')
    expect(engineer.role).toBe('engineer')
    expect(engineer.gitHub).toBe('markcode')
})

