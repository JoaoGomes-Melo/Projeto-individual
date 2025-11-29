var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserirPlacar(fkjogo, fkusuario, pontuacao, erros, qtdErros) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into placar(fkjogo,fkusuario,pontuacao,erros,qtdErros) VALUES ('${fkjogo}','${fkusuario}','${pontuacao}','${erros}','${qtdErros}');
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(id_usuario) {

    var instrucaoSql = `select pontuacao, erros, qtdErros from placar  where fkUsuario = ${id_usuario} order by idPlacar desc limit 1; `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirPlacar,
    buscarDados
};