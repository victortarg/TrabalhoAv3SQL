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


const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE grupo set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (nomeGrupo, descricao, dataCriacao) => {
    conexao.query({
        sql: "INSERT INTO grupo (NomeGrupo, Descricao, DataCriacao) VALUES (?,?,?)",
        values: [nomeGrupo, descricao, dataCriacao]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM grupo WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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