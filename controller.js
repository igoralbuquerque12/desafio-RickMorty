const personagens = require('./characters.json');
const { ordenador } = require('./utils/ordenador');

exports.extraindoDatabase = (req, res) => {
    try {
        if (req.params.ordenacao == 'Aparicoes') {
            let listaAparicoes = [];
    
            for (let personagem of personagens){
                if (personagem.status == 'Alive') {
                    listaAparicoes.push(personagem.episode.length);
                };
            };
        
            listaTratada = ordenador(listaAparicoes);
    
            res.status(200).json({
                status: 'success',
                data: listaTratada
            });
        }
    } catch(error) {
        res.status(400).json({
            status: 'fail',
            message: `Ocorreu um erro: ${error.message}`
        });
    }
}

