const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const intern = new Intern('Mark', '42', 'mark@company.com', 'intern', 'MSU')

    expect(intern.name).toBe('Mark')
    expect(intern.id).toBe('42')
    expect(intern.email).toBe('mark@company.com')
    expect(intern.role).toBe('intern')
    expect(intern.school).toBe('MSU')
})