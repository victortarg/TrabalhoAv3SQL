const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM grupo', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDGrupo: ${linha.IDGrupo} NomeGrupo: ${linha.NomeGrupo} Descricao: ${linha.Descricao} DataCriacao: ${linha.DataCriacao}`);
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