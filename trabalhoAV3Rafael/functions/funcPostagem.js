const conexao = require('../db.js');

const selectSimples = async (coluna, info) => {
    if (coluna != null && info != null) {
        conexao.query(`SELECT * FROM postagem WHERE ${coluna} = ${info}`, (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDPostagem: ${linha.IDPostagem} IDUsuario: ${linha.IDUsuario} Conteudo: ${linha.Conteudo} DataHoraPostagem: ${linha.DataHoraPostagem}`);
            });
        });
    } else if (coluna == null || info == null){
        conexao.query('SELECT * FROM postagem', (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDPostagem: ${linha.IDPostagem} IDUsuario: ${linha.IDUsuario} Conteudo: ${linha.Conteudo} DataHoraPostagem: ${linha.DataHoraPostagem}`);
            });
        });
    }
};

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE postagem set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (idUsuario, conteudo, dataHoraPostagem) => {
    conexao.query({
        sql: "INSERT INTO postagem (IDUsuario, Conteudo, DataHoraPostagem) VALUES (?,?,?)",
        values: [idUsuario, conteudo, dataHoraPostagem]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM postagem WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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