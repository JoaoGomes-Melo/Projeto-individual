USE ScoobyDoo;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
apelido  VARCHAR(45) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
sexo VARCHAR(45) NOT NULL,
dtNasc DATE NOT NULL,
senha VARCHAR(255) NOT NULL
);

CREATE TABLE jogo (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
tipo VARCHAR(45),
CONSTRAINT chkTipo CHECK (tipo in ("cruzadinha"))
);

INSERT INTO jogo(nome,tipo) VALUES
('What´s New Scooby-Doo','cruzadinha');

CREATE TABLE placar(
idPlacar INT AUTO_INCREMENT,
fkJogo INT,
fkUsuario INT,
pontuacao INT,
erros INT,
qtdErros INT,
dtjogo DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (idPlacar,fkJogo,fkUsuario),
CONSTRAINT FkJogoPlacar FOREIGN KEY (fkJogo) REFERENCES jogo (idJogo),
CONSTRAINT fkUsuarioPlacar FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);
insert into placar(idPlacar,fkjogo,fkusuario,pontuacao) values 
(1,1,1,200);

select * from placar;

SELECT TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) AS idade FROM usuario WHERE TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) < 25;
SELECT TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) AS idade FROM usuario WHERE TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) > 25;
SELECT 
    SUM(CASE WHEN TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) > 25 THEN pontuacao END) AS soma_acima_25,
    SUM(CASE WHEN TIMESTAMPDIFF(YEAR, DtNasc, CURDATE()) < 25 THEN pontuacao END) AS soma_abaixo_25
FROM placar
JOIN usuario ON fkUsuario = idUsuario;
