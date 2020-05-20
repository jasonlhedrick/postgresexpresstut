/* Code from following a postgres/express tutorial */

/* "And if it's not enough. If it's not enough. Try again. And again. Over and over again!" - Avenged Sevenfold */

const express = require('express');
const bodyParser = require('body-parser');
const queries = require('./queries');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'});
});

app.get('/users/', queries.getUsers);
app.get('/users/:id', queries.getUserById);
app.post('/users/', queries.createUser);
app.put('/users/:id', queries.editUser);
app.delete('/users/:id', queries.deleteUser);

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});
