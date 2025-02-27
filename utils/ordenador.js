exports.ordenador = (personagens) => {
    let posMaior, valorMaior;

    for (let i = 0; i < personagens.length; i++) {
        posMaior = i;
        valorMaior = personagens[i].episode.length;

        for (let k = i + 1; k < personagens.length; k++) {
            if (personagens[k].episode.length > valorMaior) {
                valorMaior = personagens[k].episode.length
                posMaior = k
            }
        }

        if (posMaior != i) {
            let aux = personagens[i]
            personagens[i] = personagens[posMaior]
            personagens[posMaior] = aux
        }
    }

    return personagens
}