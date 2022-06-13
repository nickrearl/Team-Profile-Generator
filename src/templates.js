const Engineer= require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

const generateManagerCard = function(manager){
    for (let index = 0; index < manager.length; index++) {
        const targetEmp = manager[index];
        `
            <section>
                <div>
                    <h2>${targetEmp.name}</h2>
                    <h3>${targetEmp.role}</h3>
                </div>
                <div>
                    <p>ID: ${targetEmp.id}</p>
                    <p>Email: <a href="mailto:${targetEmp.email}" target="_blank">${targetEmp.email}</a></p>
                    <p>Office Number: ${targetEmp.officeNumber}</p>
                </div>
            </section>

        `
    }
}

const generateEngineerCards = function(engineers){
    for (let index = 0; index < engineers.length; index++) {
        const targetEmp = engineers[index];
        `
            <section>
                <div>
                    <h2>${targetEmp.name}</h2>
                    <h3>${targetEmp.role}</h3>
                </div>
                <div>
                    <p>ID: ${targetEmp.id}</p>
                    <p>Email: <a href="mailto:${targetEmp.email}" target="_blank">${targetEmp.email}</a></p>
                    <p>gitHub: <a href="github.com/${targetEmp.gitHub}">${targetEmp.gitHub}</a></p>
                </div>
            </section>

        `
    }

}

const generateInternCards = function(interns){
    for (let index = 0; index < interns.length; index++) {
        const targetEmp = interns[index];
        `
            <section>
                <div>
                    <h2>${targetEmp.name}</h2>
                    <h3>${targetEmp.role}</h3>
                </div>
                <div>
                    <p>ID: ${targetEmp.id}</p>
                    <p>Email: <a href="mailto:${targetEmp.email}" target="_blank">${targetEmp.email}</a></p>
                    <p>School: ${targetEmp.school}</p>
                </div>
            </section>

        `
    }
}


const generateHTML = function(manData, engData, intData) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Company Directory</title>
        </head>
        <body>
            <header>
                <h1>My Team<h1>
            </header>

            ${generateManagerCard(manData)}
            ${generateEngineerCards(engData)}
            ${generateInternCards(intData)}
    
        </body>
        </html>
    `
}

module.exports = generateHTML