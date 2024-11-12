const express = require('express');
const mariadb = require('mariadb');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const conecta = mariadb.createPool({
    host: 'localhost',
    user: 'umarino',
    password:'12345678',
    database: 'crud_phonebook',
    port: '3306'
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi API with mariadb !!! 🎢');
})

// GET
app.get('/api/v1/phones', async (req, res) => {
    try {
        const result = await conecta.query("select * from phone_book");
        res.send(result);
    } catch (err) {
        throw err;
    }
});

app.get('/api/v1/phones/:id', async (req, res) => {
    try {
        const result = await conecta.query("select * from phone_book where id = ?", [req.params.id]);
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send('Usuario no encontrado');
        }                
    } catch (err) {
        throw err;
    }
});

// POST
app.post('/api/v1/add/phone', async (req, res) => {
    try {
        const result = await conecta.query("insert into phone_book (name, phone, address) VALUES (?, ?, ?)", [ req.body.name, req.body.phone, req.body.address]);
        res.send('Insert operation successful !!! 👍');
    } catch (err) {
        throw err;
    }
});


app.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})