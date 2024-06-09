CREATE DATABASE RedeSocial;
USE RedeSocial;

CREATE TABLE Usuario 
(
    IDUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(100) NOT NULL,
    DataDeNascimento DATE,
    Genero VARCHAR(10),
    DataCriacao DATETIME NOT NULL
);

CREATE TABLE Postagem 
(
    IDPostagem INT AUTO_INCREMENT PRIMARY KEY,
    IDUsuario INT,
    Conteudo TEXT NOT NULL,
    DataHoraPostagem DATETIME NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario(IDUsuario)
);

CREATE TABLE Amigos 
(
    IDAmizade INT AUTO_INCREMENT PRIMARY KEY,
    IDUsuario1 INT,
    IDUsuario2 INT,
    DataAmizade DATETIME NOT NULL,
    FOREIGN KEY (IDUsuario1) REFERENCES Usuario(IDUsuario),
    FOREIGN KEY (IDUsuario2) REFERENCES Usuario(IDUsuario)
);

CREATE TABLE Curtida 
(
    IDCurtida INT AUTO_INCREMENT PRIMARY KEY,
    IDUsuario INT,
    IDPostagem INT,
    DataHoraLike DATETIME NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuario(IDUsuario),
    FOREIGN KEY (IDPostagem) REFERENCES Postagem(IDPostagem)
);

CREATE TABLE Mensagem 
(
    IDMensagem INT AUTO_INCREMENT PRIMARY KEY,
    IDUsuarioRemetente INT,
    IDUsuarioDestinatario INT,
    Conteudo TEXT NOT NULL,
    DataHoraMensagem DATETIME NOT NULL,
    FOREIGN KEY (IDUsuarioRemetente) REFERENCES Usuario(IDUsuario),
    FOREIGN KEY (IDUsuarioDestinatario) REFERENCES Usuario(IDUsuario)
);

CREATE TABLE Grupo 
(
    IDGrupo INT AUTO_INCREMENT PRIMARY KEY,
    NomeGrupo VARCHAR(100) NOT NULL,
    Descricao TEXT,
    DataCriacao DATETIME NOT NULL
);

CREATE TABLE MembroGrupo 
(
    IDMembroGrupo INT AUTO_INCREMENT PRIMARY KEY,
    IDGrupo INT,
    IDUsuario INT,
    DataEntrada DATETIME NOT NULL,
    DataSaida DATETIME,
    FOREIGN KEY (IDGrupo) REFERENCES Grupo(IDGrupo),
    FOREIGN KEY (IDUsuario) REFERENCES Usuario(IDUsuario)
);

CREATE TABLE Comentario 
(
    IDComentario INT AUTO_INCREMENT PRIMARY KEY,
    IDPostagem INT,
    IDUsuario INT,
    Conteudo TEXT NOT NULL,
    DataHoraComentario DATETIME NOT NULL,
    FOREIGN KEY (IDPostagem) REFERENCES Postagem(IDPostagem),
    FOREIGN KEY (IDUsuario) REFERENCES Usuario(IDUsuario)
);


-- Relacionamentos:
-- Usuário   1 - N   Postagem:    Um usuário pode fazer várias postagens, mas cada postagem pertence a um único usuário.
-- Usuário   1 - N   Curtida:     Um usuário pode curtir várias postagens, e uma postagem pode ser curtida por vários usuários.
-- Postagem  1 - N   Curtida:     Uma postagem pode ter várias curtidas.
-- Usuário   1 - N   Mensagem:    Um usuário pode enviar várias mensagens e receber várias mensagens.
-- Usuário   1 - N   Amigos:      Um usuário pode ter vários amigos, e um amigo é também um usuário.
-- Usuário   1 - N   Comentário:  Um usuário pode fazer vários comentários, e um comentário pertence a um único usuário.
-- Postagem  1 - N   Comentário:  Uma postagem pode ter vários comentários, e um comentário pertence a uma única postagem.
-- Usuário   1 - N   MembroGrupo: Um usuário pode ser membro de vários grupos, e um grupo pode ter vários membros.
