const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM curtida', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDCurtida: ${linha.IDCurtida} IDUsuario: ${linha.IDUsuario} IDPostagem: ${linha.IDPostagem} DataHoraLike: ${linha.DataHoraLike}`);
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