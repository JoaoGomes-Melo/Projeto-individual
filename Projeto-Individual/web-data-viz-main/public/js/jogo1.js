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

function mostrarLetras(nomeClasse) {
    var letras = document.getElementsByClassName(nomeClasse);

    for (var i = 0; i < letras.length; i++) {
        letras[i].style.opacity = "1";
        letras[i].style.color = "black";
    }
}

function validar(campo, numeroPergunta) {
    var respostaUsuario = campo.value.trim().toLowerCase();
    var respostaCerta = respostas[numeroPergunta];

    if (respostaUsuario == respostaCerta) {
        pontos += 20
        mostrarLetras(classes[numeroPergunta]);
    } else {
        pontos -= 10
        alert("Resposta errada!");
    }
}