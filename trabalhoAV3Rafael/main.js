const db = require('./db.js')
const TbAmigos = require('./functions/funcAmigos.js')
const TbComentario = require('./functions/funcComentarios.js')
const TbCurtida = require('./functions/funcCurtidas.js')
const TbGrupo = require('./functions/funcGrupo.js')
const TbMembroGrupo = require('./functions/funcMemGrupo.js')
const TbMensagem = require('./functions/funcMensagem.js')
const TbPostagem = require('./functions/funcPostagem.js')
const TbUsuario = require('./functions/funcUsuario.js')

TbAmigos.selectSimples();

db.end;