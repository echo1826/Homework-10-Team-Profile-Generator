function render(employees) {
    const htmlArr = [];
    // render all manager cards here and put into empty array
    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Manager";
    }).map((manager) => {
        return renderManager(manager);
    }));
    // console.log(htmlArr);
    // render engineer cards here and put into array
    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Engineer";
    }).map((engineer) => {
        return renderEngineer(engineer);
    }));
    // console.log(htmlArr);
    // render intern cards here and put into array
    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Intern";
    }).map((intern) => {
        return renderIntern(intern);
    }));
    // console.log(htmlArr);
    // returns entire html page with all the cards on the page
    return renderHtml(htmlArr.join(""));
}
// makes the manager html card
function renderManager(manager) {
    return `<div class="card col-2">
    <div class="card-title">
        <h2>${manager.getName()}</h2>
        <h3><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
        </ul>
    </div>
</div>`;
}
// makes the engineer html card
function renderEngineer(engineer) {
    return `<div class="card col-2">
    <div class="card-title">
    <h2>${engineer.getName()}</h2>
    <h3><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href = "https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`;
}
// makes the intern html card
function renderIntern(intern) {
    return `<div class="card col-2">
    <div class="card-title">
    <h2>${intern.getName()}</h2>
    <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</a></li>
        </ul>
    </div>
</div>`;
}
// renders the base html page
function renderHtml(html) {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="card-deck center">
                ${html}
            </div>
        </main>
        <script src="https://kit.fontawesome.com/0e1a0a5b63.js" crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}

module.exports = render;