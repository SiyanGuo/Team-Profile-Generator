const inquirer = require('inquirer');

// [chooseTeam, school, github, officeNum,fullName,id,email ] 
const [chooseTeam, school, github, officeNum, fullName, id, email] = [
    {
        type: 'list',
        name: 'chooseTeam',
        message: 'Add your team',
        choices: ['Engineer', 'Intern', 'Finish adding'],
        validate: chooseTeamInput => {
            if (chooseTeamInput) return true;
            else {
                console.log("Please add your team!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your school? (required)',
        validate: schoolInput => {
            if (schoolInput) return true;
            else {
                console.log('Please enter your school!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? (required)',
        validate: githubInput => {
            if (githubInput) return true;
            else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number? (required)',
        validate: officeInput => {
            if (isNaN(officeInput)) {
                console.log('You need to provide a number.');
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name? (required)',
        validate: nameInput => {
            if (nameInput) return true;
            else {
                console.log("Please enter your name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number? (required)',
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('You need to provide a number.');
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (required)',
        validate: email => {
            const valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            if (valid) return true;
            else console.log('You need to provide a valid email address.')
        }
    },
]

//the team manager’s name, employee ID, email address, and office number

const promptManager = () => {
    // console.log(fullName,id,email, officeNum, chooseTeam);
    return inquirer.prompt([fullName, id, email, officeNum, chooseTeam])
};

const promptEngineer = (teamInfo) => {
    if (!teamInfo.engineer) {
        teamInfo.engineer = [];
    }
    return inquirer
        .prompt([fullName, id, email, github, chooseTeam])
        .then(engineerInput => {
            teamInfo.engineer.push(engineerInput);
            if (engineerInput.chooseTeam === 'Engineer') {
                return promptEngineer(teamInfo)
            } else if (engineerInput.chooseTeam === 'Intern') {
                return promptIntern(teamInfo)
            } else {
                return teamInfo;
            }
        }
        )
};

const promptIntern = (teamInfo) => {
    if (!teamInfo.intern) {
        teamInfo.intern = [];
    }
    return inquirer
        .prompt([fullName, id, email, school, chooseTeam])
        .then(internInput => {
            teamInfo.intern.push(internInput);
            if (internInput.chooseTeam === 'Engineer') {
                return promptEngineer(teamInfo)
            } else if (internInput.chooseTeam === 'Intern') {
                return promptIntern(teamInfo)
            } else {
                return teamInfo;
            }
        })
};


const addTeam = (managerInfo) => {
    if (managerInfo.chooseTeam === 'Engineer') {
        return promptEngineer(managerInfo);
    } else if (managerInfo.chooseTeam === 'Intern') {
       return  promptIntern(managerInfo)
    } else {
        return managerInfo;
    }
};

promptManager()
    .then(addTeam)
    .then(answers => console.log(answers))

