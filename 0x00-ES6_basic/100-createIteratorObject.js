export default function createIteratorObject(report) {
  function* employeeGenerator(employees) {
    for (const department of Object.keys(employees)) {
      for (const employee of employees[department]) {
        yield employee;
      }
    }
  }

  return employeeGenerator(report.allEmployees);
}
