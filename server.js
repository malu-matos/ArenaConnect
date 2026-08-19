const readlineSync = require('readline-sync');

class Turma {
    #nome;
    #id;

    constructor(ID, nome) {
        this.#id = ID;
        this.#nome = nome;
    }

    set nome(novoNome){
        if (!novoNome || novoNome.length < 3){
            console.log("ERRO: Nome inválido");
            return;
        }

        this.#nome = novoNome;
        console.log("Nome atualizado com sucesso!");
    }

    get id() {return this.#id;}
    get nome() {return this.#nome;}

    mostrarTurma() {
        console.log(`NOME: ${this.nome} / ID: "${this.id}".`);
    }



}

class Atleta {  
    #nome;
    #id;

    constructor(ID, nome, IDturma) {
        this.#id = ID;
        this.#nome = nome;
        this.idturma = IDturma;
    }

    set nome(novoNome){
        if (!novoNome || novoNome.length < 3){
            console.log("ERRO: Nome inválido")
            return;
        }

        this.#nome = novoNome;
        console.log("Nome atualizado com sucesso!");
    }

    get id() {return this.#id;}
    get nome() {return this.#nome;}

    mostrarAtleta() {
        console.log(`NOME: ${this.nome} / ID: "${this.id}".`);
    }

}

class ArenaConnect {
    constructor() {
        this.listaTurmas = [];
        this.listaAtletas = [];
        this.idContadorTurma = 1;
        this.idContadorAtleta = 1;
    }

    adicionarTurma() {
        let nome = readlineSync.question("Digite o nome da turma que deseja adicionar: ").toUpperCase();

        const turma = this.listaTurmas.find(t => t.nome === nome);
        if (turma){
            console.log("Turma já existente.");
            return;
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      const novaTurma = new Turma(this.idContadorTurma++, nome);
        this.listaTurmas.push(novaTurma);
        console.log("Turma adicionada com sucesso");

    }

    listarTurmas() {
        if (this.listaTurmas.length === 0) {
            console.log("A matriz de dados está vazia.");
            console.log("======================================\n");
        } else {
            for (let i = 0; i < this.listaTurmas.length; i++) {
                console.log(`${i + 1} - ID: ${this.listaTurmas[i].id} | Nome: ${this.listaTurmas[i].nome}`);
            }
        }
    }

    removerTurma() {
        this.listarTurmas();
        let ID = readlineSync.questionInt("Digite o ID da turma que deseja remover: ");

        const index = this.listaTurmas.findIndex((turma) => turma.id == ID);
        if (index != -1) {
            this.listaTurmas.splice(index, 1);
            console.log("Turma removida com sucesso!");
        } else {
            console.log(`[ERRO] ID ${ID} não encontrado.`);
        }
    }

    atualizarTurma() {
        this.listarTurmas();
        let ID = readlineSync.questionInt("Digite o ID da turma que deseja atualizar: ");
        let novoNome = readlineSync.question("Digite o novo nome: ").toUpperCase();

        const turma = this.listaTurmas.find(t => t.id === ID);
        if (turma) {
            turma.nome = novoNome;
        } else {
            console.log(`[ERRO] ID ${ID} não encontrado.`);
        }
    }

    adicionarAtleta() {
        let nome = readlineSync.question("Digite o nome do atleta: ");
        let IDturma = readlineSync.questionInt("Digite o ID da turma: ");

        const idTurma = this.listaTurmas.find(t => t.id === IDturma);
        if (idTurma) {
            const atleta = new Atleta(this.idContadorAtleta++, nome, IDturma);
            this.listaAtletas.push(atleta);
            console.log("Atleta adicionado com sucesso!");
        } else {
            console.log(`[ERRO] ID ${ID} não encontrado.`);
        }
    }

    listarAtletas() {
        if (this.listaAtletas.length === 0) {
            console.log("A matriz de dados está vazia.");
            console.log("======================================\n");
        } else {
            for (let i = 0; i < this.listaAtletas.length; i++) {
                console.log(`${i + 1} - ID: ${this.listaAtletas[i].id} | Nome: ${this.listaAtletas[i].nome}`);
            }
        }
    }

    removerAtleta() {
            this.listarAtletas();
        let ID = readlineSync.questionInt("Digite o ID do atleta que deseja remover: ");

        let index = this.listaAtletas.findIndex((atleta) => atleta.id == ID);

        if (index != -1) {
            this.listaAtletas.splice(index, 1); 
            console.log("Atleta removido com sucesso!");
        } else {
            console.log(`[ERRO] ID ${ID} não encontrado.`);
        }
}

    atualizarAtleta() {
        this.listarAtletas();
        let ID = readlineSync.questionInt("Digite o ID do atleta que deseja atualizar: ");
        let novoNome = readlineSync.question("Digite o novo nome: ").toUpperCase();

        const atleta = this.listaAtletas.find((atleta) => atleta.id === ID);

        if (atleta) {
            atleta.nome = novoNome;
        } else {
            console.log(`[ERRO] ID ${ID} não encontrado.`);
        }
    }
}

const arenaConnect = new ArenaConnect();

while (true) {
    console.log("=========== ARENA CONNECT =========== \n 1 - Adicionar Turma \n 2 - Listar Turmas \n 3 - Remover Turma \n 4 - Atualizar Turma \n 5 - Adicionar Atleta \n 6 - Listar Atletas \n 7 - Remover Atleta\n 8 - Atualizar Atleta \n 9 - Sair");
    let opcao = readlineSync.questionInt("Digite a opção desejada: ");

    if (opcao == 1) {
         arenaConnect.adicionarTurma();

    } else if (opcao == 2) {
        arenaConnect.listarTurmas();

    } else if (opcao == 3) {
        arenaConnect.removerTurma();

    } else if (opcao == 4) {
        arenaConnect.atualizarTurma();

    } else if (opcao == 5) {
        arenaConnect.adicionarAtleta();

    } else if(opcao == 6) {
        arenaConnect.listarAtletas();

    } else if (opcao == 7) {
        arenaConnect.removerAtleta();

    } else if (opcao == 8) {
        arenaConnect.atualizarAtleta();

    } else if (opcao == 9){
        console.log("Operação Finalizada");
        break;

    } else {
        console.log("Opção Inválida!");
    }
}