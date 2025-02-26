exports.ordenador = (lista) => {
    let posMaior, valorMaior

    for (let i = 0; i < lista.length; i++) {
        posMaior = i
        valorMaior = lista[i]
        for (let k = i + 1; k < lista.length; k++) {
            if (lista[k] > valorMaior) {
                valorMaior = lista[k]
                posMaior = k
            }
        }
        if (posMaior != i) {
            let aux = lista[i]
            lista[i] = lista[posMaior]
            lista[posMaior] = aux
        }
    }

    return lista
}