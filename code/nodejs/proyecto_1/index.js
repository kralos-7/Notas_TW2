const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
app.use(express.json());

const students = [
    {id: 1, name: "Juan", age: 20, enroll: true},
    {id: 2, name: "Pedro", age: 21, enroll: false},
    {id: 3, name: "María", age: 23, enroll: false},
];

app.get('/', (req, res) => {
    res.send('Hello API Node js');
});

app.get('/api/students', (req, res) => {
    res.send(students);
});
app.get('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');
    else res.send(student);
});
app.post('/api/students/add/', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true'),
    };
    students.push(student);
    res.send(student);
});
app.delete('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});

app.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});