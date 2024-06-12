const conexao = require('../db.js');

const selectSimples = async (coluna, info) => {
    if (coluna != null && info != null) {
        conexao.query(`SELECT * FROM comentarios WHERE ${coluna} = ${info}`, (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDComentario: ${linha.IDComentario} IDPostagem: ${linha.IDPostagem} IDUsuario: ${linha.IDUsuario} Conteudo: ${linha.Conteudo} DataHoraComentario: ${linha.DataHoraComentario}`);
            });
        });
    } else if (coluna == null || info == null){
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
};

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE comentario set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (idPostagem, idUsuario, conteudo, dataHoraComentario) => {
    conexao.query({
        sql: "INSERT INTO comentario (IDPostagem, IDUsuario, Conteudo, DataHoraComentario) VALUES (?,?,?,?)",
        values: [idPostagem, idUsuario, conteudo, dataHoraComentario]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM comentario WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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