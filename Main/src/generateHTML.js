// create team page HTML
const createTeamPage = function (employeeCards) {
    return`

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="./style.css">

    <title>Team Profile</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Navbar</span>
            </div>
          </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="teamCards">
                <!-- Insert Team Profile Cards here -->
                ${employeeCards}
            </div>

        </div>
    </main>
    

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
</html>
`;
}

// Create Manager Card
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                // TODO: Add immages here
                <h4>Manager</h4><<span class="material-symbols-outlined">
                badge
                </span>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Create Engineer Card
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                // TODO: Add immages here
                <h4>Engineer</h4><span class="material-symbols-outlined">
                engineering
                </span>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Create Intern Card
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                // TODO: Add immages here
                <h4>Intern</h4><span class="material-symbols-outlined">
                person
                </span>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
}

// generate HTML array to push to page
generateHTML = (data) => {
    profileArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManager(employee);
            profileArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = createEngineer(employee);
            profileArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = createInter(employee);
            profileArray.push(internCard);
        }

        const employeeCards = profileArray.join("");
        const createTeam = createTeamPage(employeeCards);
        return createTeam;


    }
}

    


  

// Always remember to export to index
module.exports = generateHTML;