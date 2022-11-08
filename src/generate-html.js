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