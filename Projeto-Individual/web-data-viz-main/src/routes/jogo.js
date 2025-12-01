var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirPlacar", function (req, res) {
    jogoController.inserirPlacar(req, res);
})

router.get("/buscarDados/:id_usuario", function (req, res) {
    jogoController.buscarDados(req, res);
})

router.get("/pontuacaoVelhos", function (req, res) {
    jogoController.pontuacaoVelhos(req, res);
})
router.get("/pontuacaoNovos", function (req, res) {
    jogoController.pontuacaoNovos(req, res);
})
router.get("/porcentagemHomem", function (req, res) {
    jogoController.porcentagemHomem(req, res);
})
router.get("/porcentagemMulher", function (req, res) {
    jogoController.porcentagemMulher(req, res);
})
module.exports = router;