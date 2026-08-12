const readlineSync = require('readline-sync');

let listaTurmas = [];

let opcao = 0;

function adicionarTurma(nome, listaTurmas){
    let novaTurma = {
        nome: nome,
        ID: listaTurmas.length + 1
    };

    listaTurmas.push(novaTurma);

    console.log("Turma adicionada com sucesso");
         
};

function listarTurmas(listaTurmas){
    for (let i = 0; i < listaTurmas.length; i++){
        console.log(i + 1, " - ", listaTurmas[i]);
    }
};

function removerTurma(nome, listaTurmas){
    let index = listaTurmas.findIndex((turma) => turma.nome == nome);

    if (index != -1){
        listaTurmas.splice(index, 1);

        console.log("Turma removida com sucesso!")
    } else {
        console.log("Turma não encontrada!");
    };
};

while (opcao != 4){
    console.log("=========== ARENA CONNECT =========== \n 1 - Adicionar Turma \n 2 - Listar Turmas \n 3 - Remover Turma \n 4 - Sair");
    let opcao = readlineSync.questionInt("Digite a opção desejada: ");

    if (opcao == 1){
        let nome = readlineSync.question("Digite o nome da turma que deseja adicionar: ").toUpperCase();
        adicionarTurma(nome, listaTurmas);

    } else if (opcao == 2){
        listarTurmas(listaTurmas);

    } else if (opcao == 3){
        let nome = readlineSync.question("Digite o nome da turma que deseja remover: ").toUpperCase();
        removerTurma(nome, listaTurmas);

    } else if(opcao == 4){
        console.log("Operação Finalizada");
        break;

    } else {
        console.log("Opção Inválida!");
    };
};