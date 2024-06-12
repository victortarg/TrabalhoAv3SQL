const conexao = require('../db.js');

const selectSimples = async (coluna, info) => {
    if (coluna != null && info != null) {
        conexao.query(`SELECT * FROM amigos WHERE ${coluna} = ${info}`, (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`idAmizade: ${linha.IDAmizade} idUsuario1: ${linha.IDUsuario1} idUsuario2: ${linha.IDUsuario2} DataAmizade: ${linha.DataAmizade}`);
            });
        });
    } else if (coluna == null || info == null){
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

const insertSimples = async (IDUsuario1, IDUsuario2, DataAmizade) => {
    conexao.query({
        sql: "INSERT INTO amigos (IDUsuario1, IDUsuario2, DataAmizade) VALUES (?,?,?)",
        values: [IDUsuario1, IDUsuario2, DataAmizade]
    })
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