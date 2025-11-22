// vetor de respostas
var respostas = [
    "",
    "simple plan",
    "yeti",
    "toquio",
    "sanduiche",
    "paris"
];

// vetor com as classes das letras
var classes = [
    "",
    "Simple",
    "yeti",
    "toquio",
    "Sanduiche",
    "Paris"
];
var pontos = 0
// função para mostrar as letras
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

    if (respostaUsuario === respostaCerta) {
        pontos += 10
        mostrarLetras(classes[numeroPergunta]);
    } else {
        alert("Resposta errada!");
    }
}