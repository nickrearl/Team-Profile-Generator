const inquier = require('inquirer')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./src/templates')

const managerArr = []
const engineerArr = []
const internArr = []


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
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, 'Manager', managerData.officeNumber)
        managerArr.push(manager)
    })
    .then(addEmployee)
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
            console.log(managerArr);
            console.log(engineerArr);
            console.log(internArr);
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
    .then(adtlEngAns => {
        const engineer = new Engineer(adtlEngAns.name, adtlEngAns.id, adtlEngAns.email, 'Engineer', adtlEngAns.gitHub)
        engineerArr.push(engineer)
    })
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
            name: 'school',
            message: "What school does this Intern attend?",
        }
    ])
    .then(adtlIntAns => {
        const intern = new Intern(adtlIntAns.name, adtlIntAns.id, adtlIntAns.email, 'Intern', adtlIntAns.school)
        internArr.push(intern)
    })
    .then(addEmployee)
}

getManager()


