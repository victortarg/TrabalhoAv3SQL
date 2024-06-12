const db = require('./db.js')
const TbAmigos = require('./functions/funcAmigos.js')
const TbComentario = require('./functions/funcComentarios.js')
const TbCurtida = require('./functions/funcCurtidas.js')
const TbGrupo = require('./functions/funcGrupo.js')
const TbMembroGrupo = require('./functions/funcMemGrupo.js')
const TbMensagem = require('./functions/funcMensagem.js')
const TbPostagem = require('./functions/funcPostagem.js')
const TbUsuario = require('./functions/funcUsuario.js')
// Terceira questão
//item 1
TbPostagem.selectSimples('IDUsuario', 1);

//item 2
TbMensagem.updateSimples('Conteudo', '"Mensagem de Victor para Guilherme"', 'IDMensagem', 1);

//item 3
TbCurtida.deleteSimples('IDCurtida', 10);

//item 4
function gerarSenha() {
    const numeroAleatorio = Math.random().toFixed(5)
    return Math.floor(parseFloat(numeroAleatorio) * 100_000)
}

function gerarNascimento() {
    const dia = inteiroAleatorio(1,29);
    const mes = inteiroAleatorio(1,12);
    const ano = inteiroAleatorio(1990,2006);
    return new Date(`${ano}-${mes}-${dia}`);
}

function gerarGenero() {
    const genero = inteiroAleatorio(0,1);
    return genero == 0 ? "Masculino" : "Feminino";
}

const inteiroAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min) 

for (let i = 0; i < 10_000; i++) {
    TbUsuario.insertSimples(`Usuario ${i}`, `usuario${i}@hotmail.com`,gerarSenha(), gerarNascimento(),gerarGenero(), new Date()).
    catch(err => console.log(err))
}


db.end();