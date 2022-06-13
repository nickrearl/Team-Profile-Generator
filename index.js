const inquier = require('inquirer')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')



const employeeQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's job?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email?"
    },
]

const getManager = () => {
    return inquier.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?"
        },
    ])
}

const addEmployee = () => {
    return inquier.prompt([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add another employee?'
        },
    ])
    .then(addConfirm => {
        if (addConfirm.newEmployee) {
            additionalEmployeeType()
        } else {
            return
        }
    })
}

const additionalEmployeeType = () => {
    return inquier.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's job?",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(checkEmpType => {
        if (checkEmpType.role === 'Engineer') {
            additionalEngineer()
        }
        else if (checkEmpType.role === 'Intern') {
            additionalIntern()
        }
    })
}

const additionalEngineer = () => {
    return inquier.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is this engineer's gitHub?",
        }
    ])
    .then(addEmployee)
}

const additionalIntern = () => {
    return inquier.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this Intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this Intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this Intern's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What scool does this Intern attend?",
        }
    ])
    .then(addEmployee)
}

getManager()
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, 'manager', managerData.officeNumber)
        console.log(manager);
    })
    .then(addEmployee)


