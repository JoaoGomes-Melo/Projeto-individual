//troca de imagens dos personagens 

var listaPerso = ['perso-scooby', 'perso-salsicha', 'perso-fred', 'perso-daphne', 'perso-velma']

function proximo() {

    for (var i = 0; i < listaPerso.length; i++) {


        var atual = listaPerso[i]
        var divAtual = document.getElementById(atual)
        var divComputada = window.getComputedStyle(divAtual)

        if (divComputada.display === 'flex') {
            divAtual.style.display = 'none'
            if (i == listaPerso.length - 1) {
                var proximo = listaPerso[0]
            } else {
                var proximo = listaPerso[i + 1]
            }
            var px = document.getElementById(proximo)
            px.style.display = 'flex'


            i = listaPerso.length
        }

    }
}
function anterior() {

    for (var i = listaPerso.length - 1; i >= 0; i--) {


        var atual = listaPerso[i]
        var divAtual = document.getElementById(atual)
        var divComputada = window.getComputedStyle(divAtual)

        if (divComputada.display === 'flex') {
            divAtual.style.display = 'none'
            if (i == 0) {
                var ant = listaPerso[listaPerso.length - 1]
            } else {
                var ant = listaPerso[i - 1]
            }
            var at = document.getElementById(ant)
            at.style.display = 'flex'


            i = 0
        }

    }
}