exports.desestruturarTemporadas = (personagens) => {
    for (const personagem of personagens) {
        let primeiraTemp = 0, segundaTemp = 0, terceiraTemp = 0;
        
        for (const episode of personagem.episode) {
            if (parseInt(episode.split('/')[5]) <= 11) {
                primeiraTemp += 1;
            } else if (parseInt(episode.split('/')[5]) <= 21) {
                segundaTemp += 1;
            } else {
                terceiraTemp += 1;
            };
        };

        personagem.episodeForSeason = [primeiraTemp, segundaTemp, terceiraTemp];
    };

    return personagens;
};