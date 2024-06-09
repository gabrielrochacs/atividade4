const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'atividade4', // ou o endereço IP do contêiner MariaDB
    port: 3010,
    user: 'root',
    password: '123456',
    database: 'mysql' // substitua pelo nome do seu banco de dados
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MariaDB:', error);
    } else {
        console.log('Conectado ao MariaDB com sucesso!');
    }
});
