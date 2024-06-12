const conexao = require('../db.js');

const selectSimples = async (coluna, info) => {
    if (coluna != null && info != null) {
        conexao.query(`SELECT * FROM usuario WHERE ${coluna} = ${info}`, (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDUsuario: ${linha.IDUsuario} Nome: ${linha.Nome} Email: ${linha.Email} Senha: ${linha.Senha} DataDeNascimento: ${linha.DataDeNascimento} Genero: ${linha.Genero} DataCriacao: ${linha.DataCriacao}`);
            });
        });
    } else if (coluna == null || info == null){
        conexao.query('SELECT * FROM usuario', (erro, linhas) => {
            if (erro) {
                console.error('Erro ao executar a consulta:', erro);
                return;
            }
            linhas.forEach(linha => {
                console.log(`IDUsuario: ${linha.IDUsuario} Nome: ${linha.Nome} Email: ${linha.Email} Senha: ${linha.Senha} DataDeNascimento: ${linha.DataDeNascimento} Genero: ${linha.Genero} DataCriacao: ${linha.DataCriacao}`);
            });
        });
    };
};

const updateSimples = async (colunaAlt, infoAlt, colunaWhere, infoWhere) => {
    conexao.query(`UPDATE usuario set ${colunaAlt} = ${infoAlt} WHERE ${colunaWhere} = ${infoWhere}`, (erro, result) => {
        if(erro) {
            console.log("erro ao fazer update", erro)
            return;
        }
        console.log('Mudança', result);
    })
};

const insertSimples = async (nome, email, senha, dataNascimento, genero, dataCriacao) => {
    conexao.query({
        sql: "INSERT INTO Usuario (Nome, Email, Senha, DataDeNascimento, Genero, DataCriacao) VALUES (?,?,?,?,?,?)",
        values: [nome,email,senha, dataNascimento, genero, dataCriacao]
    })
};

const deleteSimples = async (colunaDel, infoDel) => {
    conexao.query(`DELETE FROM usuario WHERE ${colunaDel} = ${infoDel};`, (erro, resultado) => {
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