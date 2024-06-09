const express = require("express");
const os = require("os");
const app = express();

app.get('/liveness', (req, res) => {
    return res
    .status(200)
    .json({
        message: "Meu APP está Vivo!",
        path: process.cwd(),
        gid: process.getgid(),
        uid: process.getuid(),
    })
});


app.get('/readiness', (req, res) => {
    return res
        .status(500)
        .json({
            message: "Meu APP está Vivo!",
            plataform: os.platform(),
            freemem: os.freemem(),
            homedir: os.homedir(),
            date: new Date().getTime(),
        })
});


app.get('/consulta-dados', (req, res) => {
    connection.query('SELECT * FROM cadastro_pessoas', (error, results) => {
        if (error) {
            console.error('Erro ao consultar dados:', error);
            res.status(500).send('Erro ao consultar dados do banco de dados.');
        } else {
            res.json(results);
        }
    });
});

module.exports = app;
