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
var qtdErros = 0

function validar(campo, numeroPergunta) {
    var respostaUsuario = campo.value.trim().toLowerCase();
    var respostaCerta = respostas[numeroPergunta];

    if (respostaUsuario == respostaCerta) {
        pontos += 20
        mostrarLetras(classes[numeroPergunta]);
    } else {
        erros = pontos -= 10
        qtdErros++
        alert("Resposta errada!");
    }
}

function mostrarLetras(nomeClasse) {
    var letras = document.getElementsByClassName(nomeClasse);

    for (var i = 0; i < letras.length; i++) {
        letras[i].style.opacity = "1";
        letras[i].style.color = "black";
    }
}

function finalizar() {

    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/jogo/inserirPlacar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // idplacarServer: idplacar,
            fkjogoServer: 1,
            fkusuarioServer: sessionStorage.ID_USUARIO,
            pontuacaoServer: pontos,
            errosServer: erros, 
            qtdErrosServer: qtdErros,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log(resposta);
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
        
        // limpar os campos
        window.location.href="../dashboard/dash.html"
    return false;
}
