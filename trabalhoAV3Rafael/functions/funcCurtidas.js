const conexao = require('../db.js');

const selectSimples = async (coluna, info) => {
    if (coluna != null && info != null) {
        conexao.query(`SELECT * FROM curtida WHERE ${coluna} = ${info}`, (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDCurtida: ${linha.IDCurtida} IDUsuario: ${linha.IDUsuario} IDPostagem: ${linha.IDPostagem} DataHoraLike: ${linha.DataHoraLike}`);
            });
        });
    } else if (coluna == null || info == null){
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
};

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE curtida set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (idUsuario, idPostagem, dataHoraLike) => {
    conexao.query({
        sql: "INSERT INTO curtida (IDUsuario, IDPostagem, DataHoraLike) VALUES (?,?,?)",
        values: [idUsuario, idPostagem, dataHoraLike]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM curtida WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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