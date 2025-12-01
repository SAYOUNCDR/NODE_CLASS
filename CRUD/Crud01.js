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

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id); // cause id is string by default
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

// Create a new student
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

// Update a student by ID
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course } = req.body;
  const studentIndex = students.findIndex((s) => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[studentIndex] = { id, name, course };
  res.json(students[studentIndex]);
});

// Delete a student by ID
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === id);

  if (!studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  students.splice(studentIndex, 1);
  res.status(204).json({ message: "Student deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
