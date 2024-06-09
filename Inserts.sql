USE redesocial;

-- Inserindo Usuários
INSERT INTO Usuario (Nome, Email, Senha, DataDeNascimento, Genero, DataCriacao)
VALUES 
('João Augusto', 'joao@gmail.com', 'senha123', '2000-01-01', 'Masculino', '2015-01-01 08:00:00'),
('Davi Gregório', 'davi@gmail.com', 'senha456', '2001-02-01', 'Masculino', '2016-03-12 09:00:00'),
('Guilherme Paiva', 'guilherme@gmail.com', 'senha789', '2002-03-01', 'Masculino', '2017-07-01 10:00:00'),
('Victor Targino', 'victor@gmail.com', 'senha321', '2003-04-01', 'Masculino', '2018-02-06 11:00:00'),
('Ana Silva', 'ana@gmail.com', 'senha654', '1999-05-01', 'Feminino', '2019-07-07 12:00:00'),
('Maria Souza', 'maria@gmail.com', 'senha987', '2000-06-01', 'Feminino', '2020-08-08 13:00:00'),
('Carlos Dias', 'carlos@gmail.com', 'senha543', '2001-07-01', 'Masculino', '2021-09-09 14:00:00'),
('Fernanda Lima', 'fernanda@gmail.com', 'senha210', '2002-08-01', 'Feminino', '2022-10-10 15:00:00'),
('Pedro Santos', 'pedro@gmail.com', 'senha876', '2003-09-01', 'Masculino', '2023-11-11 16:00:00'),
('Lucas Martins', 'lucas@gmail.com', 'senha135', '2004-10-01', 'Masculino', '2024-12-12 17:00:00');

-- Inserindo Postagens
INSERT INTO Postagem (IDUsuario, Conteudo, DataHoraPostagem)
VALUES 
(1, 'Postagem de João', '2015-01-01 08:00:00'),
(2, 'Postagem de Davi', '2016-03-12 09:00:00'),
(3, 'Postagem de Guilherme', '2017-07-01 10:00:00'),
(4, 'Postagem de Victor', '2018-02-06 11:00:00'),
(5, 'Postagem de Ana', '2019-07-07 12:00:00'),
(6, 'Postagem de Maria', '2020-08-08 13:00:00'),
(7, 'Postagem de Carlos', '2021-09-09 14:00:00'),
(8, 'Postagem de Fernanda', '2022-10-10 15:00:00'),
(9, 'Postagem de Pedro', '2023-11-11 16:00:00'),
(10, 'Postagem de Lucas', '2024-12-12 17:00:00');

-- Inserindo Amizades
INSERT INTO Amigos (IDUsuario1, IDUsuario2, DataAmizade)
VALUES 
(1, 2, '2016-01-01 08:00:00'),
(1, 3, '2017-03-12 09:00:00'),
(2, 4, '2018-07-01 10:00:00'),
(2, 5, '2019-02-06 11:00:00'),
(3, 4, '2020-07-07 12:00:00'),
(3, 5, '2021-08-08 13:00:00'),
(4, 6, '2022-09-09 14:00:00'),
(5, 7, '2023-10-10 15:00:00'),
(6, 8, '2024-11-11 16:00:00'),
(7, 9, '2024-12-12 17:00:00');

-- Inserindo Curtidas
INSERT INTO Curtida (IDUsuario, IDPostagem, DataHoraLike)
VALUES 
(1, 1, '2017-01-01 08:00:00'),
(2, 1, '2018-03-12 09:00:00'),
(3, 1, '2019-07-01 10:00:00'),
(4, 2, '2020-02-06 11:00:00'),
(5, 2, '2021-07-07 12:00:00'),
(6, 3, '2022-08-08 13:00:00'),
(7, 3, '2023-09-09 14:00:00'),
(8, 4, '2024-10-10 15:00:00'),
(9, 4, '2024-11-11 16:00:00'),
(10, 5, '2024-12-12 17:00:00');

-- Inserindo Mensagens
INSERT INTO Mensagem (IDUsuarioRemetente, IDUsuarioDestinatario, Conteudo, DataHoraMensagem)
VALUES 
(1, 2, 'Mensagem de João para Davi', '2016-01-01 08:00:00'),
(2, 3, 'Mensagem de Davi para Guilherme', '2017-03-12 09:00:00'),
(3, 4, 'Mensagem de Guilherme para Victor', '2018-07-01 10:00:00'),
(4, 5, 'Mensagem de Victor para Ana', '2019-02-06 11:00:00'),
(5, 1, 'Mensagem de Ana para João', '2020-07-07 12:00:00'),
(6, 2, 'Mensagem de Maria para Davi', '2021-08-08 13:00:00'),
(7, 3, 'Mensagem de Carlos para Guilherme', '2022-09-09 14:00:00'),
(8, 4, 'Mensagem de Fernanda para Victor', '2023-10-10 15:00:00'),
(9, 5, 'Mensagem de Pedro para Ana', '2024-11-11 16:00:00'),
(10, 6, 'Mensagem de Lucas para Maria', '2024-12-12 17:00:00');

-- Inserindo Grupos
INSERT INTO Grupo (NomeGrupo, Descricao, DataCriacao)
VALUES 
('Grupo 1', 'Descricao do Grupo 1', '2016-01-01 08:00:00'),
('Grupo 2', 'Descricao do Grupo 2', '2017-03-12 09:00:00'),
('Grupo 3', 'Descricao do Grupo 3', '2018-07-01 10:00:00'),
('Grupo 4', 'Descricao do Grupo 4', '2019-02-06 11:00:00'),
('Grupo 5', 'Descricao do Grupo 5', '2020-07-07 12:00:00'),
('Grupo 6', 'Descricao do Grupo 6', '2021-08-08 13:00:00'),
('Grupo 7', 'Descricao do Grupo 7', '2022-09-09 14:00:00'),
('Grupo 8', 'Descricao do Grupo 8', '2023-10-10 15:00:00'),
('Grupo 9', 'Descricao do Grupo 9', '2024-11-11 16:00:00'),
('Grupo 10', 'Descricao do Grupo 10', '2024-12-12 17:00:00');

-- Inserindo Membros no Grupo
INSERT INTO MembroGrupo (IDGrupo, IDUsuario, DataEntrada, DataSaida)
VALUES 
(1, 1, '2017-01-01 08:00:00', NULL),
(1, 2, '2018-03-12 09:00:00', NULL),
(1, 3, '2019-07-01 10:00:00', NULL),
(2, 4, '2020-02-06 11:00:00', NULL),
(2, 5, '2021-07-07 12:00:00', NULL),
(3, 6, '2022-08-08 13:00:00', NULL),
(4, 7, '2023-09-09 14:00:00', NULL),
(5, 8, '2024-10-10 15:00:00', NULL),
(6, 9, '2024-11-11 16:00:00', NULL),
(7, 10, '2024-12-12 17:00:00', NULL);

-- Inserindo Comentários
INSERT INTO Comentario (IDPostagem, IDUsuario, Conteudo, DataHoraComentario)
VALUES 
(1, 2, 'Comentário de Davi na postagem de João', '2017-01-01 08:00:00'),
(2, 3, 'Comentário de Guilherme na postagem de Davi', '2018-03-12 09:00:00'),
(3, 4, 'Comentário de Victor na postagem de Guilherme', '2019-07-01 10:00:00'),
(4, 5, 'Comentário de Ana na postagem de Victor', '2020-02-06 11:00:00'),
(5, 1, 'Comentário de João na postagem de Ana', '2021-07-07 12:00:00'),
(6, 6, 'Comentário de Maria na postagem de Carlos', '2022-08-08 13:00:00'),
(7, 7, 'Comentário de Carlos na postagem de Fernanda', '2023-09-09 14:00:00'),
(8, 8, 'Comentário de Fernanda na postagem de Pedro', '2024-10-10 15:00:00'),
(9, 9, 'Comentário de Pedro na postagem de Lucas', '2024-11-11 16:00:00'),
(10, 10, 'Comentário de Lucas na postagem de João', '2024-12-12 17:00:00');