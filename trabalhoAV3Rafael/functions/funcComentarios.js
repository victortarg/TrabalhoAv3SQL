const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM comentarios', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDComentario: ${linha.IDComentario} IDPostagem: ${linha.IDPostagem} IDUsuario: ${linha.IDUsuario} Conteudo: ${linha.Conteudo} DataHoraComentario: ${linha.DataHoraComentario}`);
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