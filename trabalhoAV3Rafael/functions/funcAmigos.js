const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM amigos', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`idAmizade: ${linha.IDAmizade} idUsuario1: ${linha.IDUsuario1} idUsuario2: ${linha.IDUsuario2} DataAmizade: ${linha.DataAmizade}`);
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