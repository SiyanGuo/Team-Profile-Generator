const generateManager = manager => {
    return `
<section class="card col-12 col-md-3 mb-2">
            <div class="card-header bg-dark">
                <h2 class="text-light">
                    ${manager.fullName}
                </h2>
                <h4 class="text-light">
                <i class="fas fa-mug-hot"></i> Manager
                </h4>
            </div>
            <div class="card-body bg-tertiary">
                <h5>ID: ${manager.id}</h5>
                <h5>Email: <a href="mailto:${manager.email}">${manager.email}</a></h5>
                <h5>Office Number: ${manager.officeNum}</h5>
            </div>
        </section>
`
};

const generateEngineer = engineer => {

    return `
    ${engineer
            .map(({ fullName, id, email, github }) => {
                return `
        <section class="card col-12 col-md-3 mb-2">
            <div class="card-header bg-dark">
                <h2 class="text-light">
                    ${fullName}
                </h2>
                <h4 class="text-light">
                <i class="fas fa-server"></i> Engineer
                </h4>
            </div>
            <div class="card-body bg-tertiary">
                <h5>ID: ${id}</h5>
                <h5>Email: <a href="mailto:${email}">${email}</a></h5>
                <h5>Github: <a href="https://github.com/${github}" target="_blank">${github}</a></h5>
            </div>
        </section>
        `
                    
            })
            .join('')
        }`
};

const generateIntern = intern => {
    return `
    ${intern.map(({ fullName, id, email, school }) => {
        return `
        <section class="card col-12 col-md-3 mb-2">
            <div class="card-header bg-dark">
                <h2 class="text-light">
                    ${fullName}
                </h2>
                <h4 class="text-light">
                <i class="fas fa-school"></i> Intern
                </h4>
            </div>
            <div class="card-body bg-tertiary">
                <h5>ID: ${id}</h5>
                <h5>Email: <a href="mailto:${email}">${email}</a></h5>
                <h5>School: ${school}</h5>
            </div>
        </section>
        `
    })
    .join('')
}`
};

const generatePage = teamData => {
    console.log(teamData);

    const { engineer, intern, ...manager } = teamData;

    return `
        <!DOCTYPE html>
            <html lang="en">

                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="ie=edge">
           <title>Team Profile</title>
                                <link rel="preconnect" href="https://fonts.googleapis.com">
                                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500&display=swap" rel="stylesheet">
                                        <script src="https://kit.fontawesome.com/d37c730b0c.js" crossorigin="anonymous"></script>    
                                        <link rel="stylesheet" href="./style.css">
    </head>

                                            <body>
                                                <header>
                                                    <div class="container py-3">
                                                        <h1 class="page-title text-light py-2 px-3">Meet Our Team</h1>
                                                    </div>
                                                </header>

                                                <main class="container my-5 flex-row justify-space-around">

                                                    ${generateManager(manager)}
                                                    ${generateEngineer(engineer)}
                                                    ${generateIntern(intern)}
                                                </main>

                                                <footer class="container text-center py-3">
                                                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Serena Guo</h3>
                                                </footer>

                                            </body>
    </html>
                                        `

}

module.exports = generatePage;