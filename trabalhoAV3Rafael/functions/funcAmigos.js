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

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE amigos set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = () => {
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM amigos WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
        if (erro) {
            console.error('Erro ao executar o delete:', erro);
            return;
        }
        console.log('Linhas afetadas:', resultado.affectedRows);
    });
};

module.exports.selectSimples = selectSimples;
module.exports.updateSimples = updateSimples;
module.exports.insertSimples = insertSimples;
module.exports.deleteSimples = deleteSimples;