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

module.exports = app;
