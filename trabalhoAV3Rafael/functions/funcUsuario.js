const conexao = require('../db.js');

const selectSimples = async () => {
    conexao.query('SELECT * FROM usuario', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDUsuario: ${linha.IDUsuario} Nome: ${linha.Nome} Email: ${linha.Email} Senha: ${linha.Senha} DataDeNascimento: ${linha.DataDeNascimento} Genero: ${linha.Genero} DataCriacao: ${linha.DataCriacao}`);
        });
    });
};

const updateSimples = () => {
};

const insertSimples = async (nome, email, senha, dataNascimento, genero, dataCriacao) => {
    conexao.query({
        sql: "INSERT INTO Usuario (Nome, Email, Senha, DataDeNascimento, Genero, DataCriacao) VALUES (?,?,?,?,?,?)",
        values: [nome,email,senha, dataNascimento, genero, dataCriacao]
    })
};

// (
//     IDUsuario INT AUTO_INCREMENT PRIMARY KEY,
//     Nome VARCHAR(100) NOT NULL,
//     Email VARCHAR(100) NOT NULL UNIQUE,
//     Senha VARCHAR(100) NOT NULL,
//     DataDeNascimento DATE,
//     Genero VARCHAR(10),
//     DataCriacao DATETIME NOT NULL
// );

const deleteSimples = () => {
};

module.exports.selectSimples = selectSimples;
module.exports.updateSimples = updateSimples;
module.exports.insertSimples = insertSimples;
module.exports.deleteSimples = deleteSimples;