const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile,copyFile } = require('./utils/generate-site');
 

//questions array
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

//prompt for manager info
const promptManager = () => {
    return inquirer.prompt([fullName, id, email, officeNum, chooseTeam])
};

//prompt for engineer info
const promptEngineer = (teamInfo) => {
    //create an empty engineer array if there is none
    if (!teamInfo.engineer) {
        teamInfo.engineer = [];
    }
    return inquirer
        .prompt([fullName, id, email, github, chooseTeam])
        .then(engineerInput => {
            //save this engineer infor into array
            teamInfo.engineer.push(engineerInput);
            //check if want to add more team member
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

//prompt for intern info
const promptIntern = (teamInfo) => {
    //create an empty engineer array if there is none
    if (!teamInfo.intern) {
        teamInfo.intern = [];
    }
    return inquirer
        .prompt([fullName, id, email, school, chooseTeam])
        .then(internInput => {
            //save this intern infor into array
            teamInfo.intern.push(internInput);
            //check if want to add more team member
            if (internInput.chooseTeam === 'Engineer') {
                return promptEngineer(teamInfo)
            } else if (internInput.chooseTeam === 'Intern') {
                return promptIntern(teamInfo)
            } else {
                return teamInfo;
            }
        })
};

//check which team to prompt
const addTeam = (managerInfo) => {
    if (managerInfo.chooseTeam === 'Engineer') {
        return promptEngineer(managerInfo);
    } else if (managerInfo.chooseTeam === 'Intern') {
        return promptIntern(managerInfo)
    } else {
        return managerInfo;
    }
};

promptManager()
    .then(addTeam)
    .then(teamData =>{
        return generatePage(teamData);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML);
    })
    .then(writeFileResponse =>{
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse =>{
        console.log(copyFileResponse);
    })
    .catch(err =>{
        console.log(err);
    })

