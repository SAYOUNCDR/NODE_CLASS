const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let employees = [
  { id: 1, name: "John Sharma", salary: 60000, Department: "IT" },
  { id: 2, name: "Billi Mishra", salary: 60000, Department: "Marketing" },
  { id: 3, name: "Ravi Kumar", salary: 60000, Department: "HR" },
  { id: 4, name: "Anita Singh", salary: 60000, Department: "Finance" },
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});
app.post("/employees", (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    salary: req.body.salary,
    Department: req.body.Department,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.put("/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (employee) {
    employee.name = req.body.name || employee.name;
    employee.salary = req.body.salary || employee.salary;
    employee.Department = req.body.Department || employee.Department;
    res.json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.delete("/employees/:id", (req, res) => {
  const index = employees.findIndex(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    const deletedEmployee = employees.splice(index, 1);
    res.json(deletedEmployee[0]);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
