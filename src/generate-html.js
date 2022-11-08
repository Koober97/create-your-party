const uniqueGetter = function (employee) {
    const role = employee.getRole();
    switch (role) {
      case "Manager":
        return `Office number: ${employee.officeNumber}`;
      case "Engineer":
        return `GitHub: <a href='https://github.com/${employee.github}' target='_blank'>${employee.github}</a>`;
      case "Intern":
        return `School: ${employee.school}`;
    }
  };

  //creates the employee cards
function generateCards(data) {
    return data
      .map((employee) => {
        const { name, id, email } = employee;
        const role = employee.getRole();
        //get unique attribute html
        const unique = uniqueGetter(employee);
        return `
        <div class="card m-3" style="width: 15rem">
          <div class="card-header text-bg-primary">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-text">${role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">${unique}</li>
          </ul>
        </div>
        `;
      })
      .join("");
  }