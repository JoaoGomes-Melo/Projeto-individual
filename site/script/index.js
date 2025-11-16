//troca de imagens dos personagens 

    var listaPerso = ['perso-scooby', 'perso-salsicha', 'perso-fred', 'perso-daphne', 'perso-velma']

    function proximo() {

        for (var i = 0; i < listaPerso.length; i++) {


            var atual = listaPerso[i]
            var divAtual = document.getElementById(atual)
            var divComputada = window.getComputedStyle(divAtual)

            if (divComputada.display === 'flex') {
                divAtual.style.display = 'none'
                var proximo = listaPerso[i + 1]
                var px = document.getElementById(proximo)
                px.style.display = 'flex'


                i = listaPerso.length

            }
        }
    }