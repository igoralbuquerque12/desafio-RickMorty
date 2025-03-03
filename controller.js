const personagens = require('./characters.json');
const { ordenadorAparicoes, ordenadorNomes } = require('./utils/ordenadores');
const { desestruturarTemporadas } = require('./utils/desestruturadores')

exports.extraindoDatabase = (req, res) => {
    try {
        let personagensOrdenados = [], personagensVivos = [];

        for (let personagem of personagens){
            if (personagem.status == 'Alive') {
                personagensVivos.push(personagem)
            };
        };

        personagensVivos = desestruturarTemporadas(personagensVivos)
        
        if (req.params.ordenacao == 'Aparicoes') {
            personagensOrdenados = ordenadorAparicoes(personagensVivos);
            
            return res.status(200).json({
                status: 'success',
                personagens: personagensOrdenados
            });

        } else if (req.params.ordenacao == 'Nome') {
            personagensOrdenados = ordenadorNomes(personagensVivos);
            
            return res.status(200).json({
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

