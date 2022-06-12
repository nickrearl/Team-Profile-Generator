const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Mark', '42', 'mark@company.com', 'manager')

    expect(employee.name).toBe('Mark')
    expect(employee.id).toBe('42')
    expect(employee.email).toBe('mark@company.com')
    expect(employee.role).toBe('manager')
})