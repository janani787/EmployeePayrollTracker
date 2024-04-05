// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employee ={
  firstName:"",
  lastName:"",
  salary:NaN};
// Collect employee data
const employees=[];

const collectEmployees = function() {
  

  const emp = {
     firstName:prompt("Enter first name"),
    
      lastName:prompt("Enter Last name"),
     salary:prompt("Enter Salary")}
  if(isNaN(emp.salary))
  {
    emp.salary=0;
  }
  
   
      employees.push(emp);
      let confirmResult=confirm("do you want to add another employee?")
      if(confirmResult)
      {
        collectEmployees();
      }
     
  

  
  console.log(Object.values(employees));
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
 
  let averageSalary=0;
  let employeeSalary=0;
  for (const employee of employeesArray)
  {
    employeeSalary = employeeSalary+ employee.salary;

  }

  averageSalary=employeeSalary/employeesArray.length;
  console.log(`Employee count ${employeesArray.length}`);
  console.log(`average salary ${averageSalary}`);
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  let randomEmployeeIndex=Math.floor(Math.random() * (((employeesArray.length) -1)- 0 + 1)) + 0;
 
   console.log( `Congratulations to ${employeesArray[randomEmployeeIndex].firstName} ${employeesArray[randomEmployeeIndex].lastName}, out random drawing winner!`); 
}

/*
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
     console.log(`salary cell ${salaryCell.textContent}`);
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

