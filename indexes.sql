CREATE INDEX idx_post_usuario_id
ON postagem (IDUsuario);

CREATE INDEX idx_msg_usuario_id
ON mensagem (IDUsuarioRemetente, IDUsuarioDestinatario);