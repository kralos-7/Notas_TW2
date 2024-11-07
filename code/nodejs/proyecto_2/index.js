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
    res.send('Hi API with mariadb !!!');
})

// GET
app.get('/phones', async (req, res) => {
    try {
        const result = await conecta.query("select * from phone_book");
        res.send(result);
    } catch (err) {
        throw err;
    }
});

app.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})