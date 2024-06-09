const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM postagem', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDPostagem: ${linha.IDPostagem} IDUsuario: ${linha.IDUsuario} Conteudo: ${linha.Conteudo} DataHoraPostagem: ${linha.DataHoraPostagem}`);
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