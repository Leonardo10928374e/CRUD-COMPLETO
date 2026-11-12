// const jsonServer = require('json-server');

// const server = jsonServer.create();

// const router = jsonServer.router('db.json');

// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// const porta = 3000;
// server.use(router);
// const express = require('express');
// const app = express();

// app.use(express.static('public'));
// app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/public/index.html');
// })

// server.listen(porta, () => {
    // console.log(`JSON SERVER está rodando em http://localhost:${porta}`);
// })


const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(jsonServer.defaults());

const router = jsonServer.router('db.json');

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
