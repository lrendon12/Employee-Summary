const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?",
        },

    ]
    
  

    ).then((answer) => {
        if (answer.action === "Create Manager") {
            createManager();
        } else if (answer.action === "Create Engineer") {
            createEngineer();
        } else if (answer.action === "Create Intern") {
            createIntern();
        } else if (answer.action === "Build New Team") {
            createBuildNewTeam();
        }       

    })

}


function createManager() {
    inquirer.prompt([

           

        ])
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            teamMembers.push(manager);
            promptUser();

        })

}
function createEngineer() {
    inquirer.prompt([

            {
                type: "input",
                name: "github",
                message: "What is your Github user name?",
            },


        ])
        .then((answer) => {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.G);
            teamMembers.push(Engineer);
            promptUser();

        })

}

function buildHTML(){
    let newFile =fs.readFileSync("./lib/main.html")
    fs.writeFileSync("./lib/team.html", newFile, function (err){
        if (err) throw err;
    })
}












promptUser();