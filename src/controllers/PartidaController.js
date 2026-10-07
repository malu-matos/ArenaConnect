const PartidaView = require('../views/PartidaView');

const PartidaController = {
    registrarPartida(sistema){
        sistema.listarEquipes();
        try{
            const idEquipeA = PartidaView.perguntarIdEquipe("Digite o ID da equipe A: ");
            const idEquipeB = PartidaView.perguntarIdEquipe("Digite o ID da equipe B: ");

            const golsEquipeA = PartidaView.perguntarGols("Digite o número de gols da equipe A: ");
            const golsEquipeB = PartidaView.perguntarGols("Digite o número de gols da equipe B: ");
            const {nomeEquipeA, nomeEquipeB} = sistema.registrarPartida(idEquipeA, idEquipeB, golsEquipeA, golsEquipeB);
            PartidaView.mostrarRegistrada(nomeEquipeA, nomeEquipeB, golsEquipeA, golsEquipeB);
        } catch(erro) {
            PartidaView.mostrarErroCadastro(erro.message);
        }
    },

    listarPartidas(sistema){
        PartidaView.listarPartidas(sistema.listarPartidas());
    }
}

module.exports = PartidaController;