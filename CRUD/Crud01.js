const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data
let students = [
  {
    id: 1,
    name: "Baba yaga",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "Jane bill",
    course: "Mathematics",
  },
  {
    id: 3,
    name: "Ellen ripley",
    course: "Physics",
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id); // cause id is string by default
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

app.post("/students", (req, res) => {
  const { name, course } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
