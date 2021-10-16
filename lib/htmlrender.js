function render(employees) {
    const htmlArr = [];

    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Manager";
    }).map((manager) => {
        return renderManager(manager);
    }));
    console.log(htmlArr);
    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Engineer";
    }).map((engineer) => {
        return renderEngineer(engineer);
    }));
    console.log(htmlArr);
    htmlArr.push(...employees.filter((employee) => {
        return employee.getRole() === "Intern";
    }).map((intern) => {
        return renderIntern(intern);
    }));
    console.log(htmlArr);
    return renderHtml(htmlArr.join(""));
}

function renderManager(manager) {
    return `<div class="card col-2">
    <div class="card-title">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
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

function renderEngineer(engineer) {
    return `<div class="card col-2">
    <div class="card-title">
    <h2>${engineer.getName()}</h2>
    <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href = "https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`
}

function renderIntern(intern) {
    return `<div class="card col-2">
    <div class="card-title">
    <h2>${intern.getName()}</h2>
    <h3>${intern.getRole()}</h3>
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

function renderHtml(html) {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="card-deck">
                ${html}
            </div>
        </main>
    
    </body>
    
    </html>`;
}

module.exports = render;