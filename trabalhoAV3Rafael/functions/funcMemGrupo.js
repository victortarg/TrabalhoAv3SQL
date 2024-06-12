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

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE membrogrupo set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (idGrupo, idUsuario, dataEntrada, dataSaida) => {
    conexao.query({
        sql: "INSERT INTO membrogrupo (IDGrupo, IDUsuario, DataEntrada, DataSaida) VALUES (?,?,?,?)",
        values: [idGrupo, idUsuario, dataEntrada, dataSaida]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM membrogrupo WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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