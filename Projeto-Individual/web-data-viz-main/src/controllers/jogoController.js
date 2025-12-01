var jogoModel = require("../models/jogoModel");

function inserirPlacar(req, res) {
    // var idplacar = req.body.idplacarServer;
    var fkjogo = req.body.fkjogoServer;
    var fkusuario = req.body.fkusuarioServer;
    var pontuacao = req.body.pontuacaoServer;
    var erros = req.body.errosServer;
    var qtdErros = req.body.qtdErrosServer;




    // Faça as validações dos valores
    //if (idplacar == undefined) {
    //   res.status(400).send("idPlacar está undefined!");
    // } else 
    if (fkjogo == undefined) {
        res.status(400).send("fkJogo está undefined!");
    } else if (fkusuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("pontuação está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("erros está undefined!");
    } else if (qtdErros == undefined) {
        res.status(400).send("qtdErros está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.inserirPlacar(fkjogo, fkusuario, pontuacao, erros, qtdErros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDados(req, res) {
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Usuário está undefined!");
    } else {

        jogoModel.buscarDados(id_usuario)
            .then((resultado) => {
                if (resultado.length >= 0) {
                    res.status(200).send(resultado[0]);
                } else {
                    res.status(204).json([])
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function pontuacaoVelhos(req, res) {

    jogoModel.pontuacaoVelhos()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function pontuacaoNovos(req, res) {

    jogoModel.pontuacaoNovos()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function porcentagemHomem(req, res) {

    jogoModel.porcentagemHomem()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function porcentagemMulher(req, res) {

    jogoModel.porcentagemMulher()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    inserirPlacar,
    buscarDados,
    pontuacaoVelhos,
    pontuacaoNovos,
    porcentagemHomem,
    porcentagemMulher
}