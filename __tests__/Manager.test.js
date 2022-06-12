const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
    const manager = new Manager('Mark', '42', 'mark@company.com', 'manager', '404')

    expect(manager.name).toBe('Mark')
    expect(manager.id).toBe('42')
    expect(manager.email).toBe('mark@company.com')
    expect(manager.role).toBe('manager')
    expect(manager.officeNumber).toBe('404')
})