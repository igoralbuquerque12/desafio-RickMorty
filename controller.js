const personagens = require('./characters.json');
const { ordenador } = require('./utils/ordenador');

exports.extraindoDatabase = (req, res) => {
    try {
        let personagensOrdenados = [], personagensVivos = [];

        for (let personagem of personagens){
            if (personagem.status == 'Alive') {
                personagensVivos.push(personagem)
            };
        };

        if (req.params.ordenacao == 'Aparicoes') {
            personagensOrdenados = ordenador(personagensVivos);
            
            res.status(200).json({
                status: 'success',
                personagens: personagensOrdenados
            });
            
        } else if (req.params.ordenacao == 'Nome') {
            personagensOrdenados = ordenador(personagensVivos);
            
            res.status(200).json({
                status: 'success',
                personagens: personagensOrdenados
            });
        }
    
        res.status(200).json({
            status: 'success',
            personagens: personagens
        });

    } catch(error) {
        res.status(400).json({
            status: 'fail',
            message: `Ocorreu um erro: ${error.message}`
        });
    }
}

