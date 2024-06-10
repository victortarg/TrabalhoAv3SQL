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

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE mensagem set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança: ', result);
    })
};

const insertSimples = () => {
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM mensagem WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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