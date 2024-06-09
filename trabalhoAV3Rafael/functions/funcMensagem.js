const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM mensagem', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDMensagem: ${linha.IDMensagem} IDUsuarioRemetente: ${linha.IDUsuarioRemetente} IDUsuarioDestinatario: ${linha.IDUsuarioDestinatario} Conteudo: ${linha.Conteudo} DataHoraMensagem: ${linha.DataHoraMensagem}`);
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