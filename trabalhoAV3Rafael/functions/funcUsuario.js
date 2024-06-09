const conexao = require('../db.js');

const selectSimples = () => {
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

const insertSimples = () => {
};

const deleteSimples = () => {
};

module.exports.selectSimples = selectSimples;
module.exports.updateSimples = updateSimples;
module.exports.insertSimples = insertSimples;
module.exports.deleteSimples = deleteSimples;