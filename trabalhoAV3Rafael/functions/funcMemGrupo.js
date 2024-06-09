const conexao = require('../db.js');

const selectSimples = () => {
    conexao.query('SELECT * FROM membrogrupo', (erro, linhas) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            return;
        }
        linhas.forEach(linha => {
            console.log(`IDMembroGrupo: ${linha.IDMembroGrupo} IDGrupo: ${linha.IDGrupo} IDUsuario: ${linha.IDUsuario} DataEntrada: ${linha.DataEntrada} DataSaida: ${linha.DataSaida}`);
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