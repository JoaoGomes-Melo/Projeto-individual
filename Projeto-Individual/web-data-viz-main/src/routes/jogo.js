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

module.exports = router;