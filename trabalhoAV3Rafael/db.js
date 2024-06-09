//npm install mysql
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost', //colocar o host do seu computador
    user: 'victor', //colocar o user do seu computador
    password: '123456789', //colocar a senha do seu user
    database: 'redesocial', //nome do banco
});

conexao.connect((error) => {
    if (error) {
        console.log('Erro ao conectar com o banco de dados:', error)
    }
})

module.exports = conexao;