var respostas = [
    "",
    "simple plan",
    "yeti",
    "toquio",
    "sanduiche",
    "paris",
    "megalopolis",
    "winkel",
    "hoque",
    "grecia",
    "oricalco"
];


var classes = [
    "",
    "Simple",
    "yeti",
    "toquio",
    "Sanduiche",
    "Paris",
    "megalopolis",
    "winkel",
    "hoque",
    "grecia",
    "oricalco"
];

var pontos = 0
var erros = 0


function validar(campo, numeroPergunta) {
    var respostaUsuario = campo.value.trim().toLowerCase();
    var respostaCerta = respostas[numeroPergunta];

    if (respostaUsuario == respostaCerta) {
        pontos += 20
        mostrarLetras(classes[numeroPergunta]);
    } else {
        erros = pontos -= 10
        alert("Resposta errada!");
    }
}
