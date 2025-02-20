const personagens = require('./characters.json')

let list_aparicoes = []

for (let personagem of personagens){
    list_aparicoes.push(personagem.episode.length)
}

console.log(list_aparicoes)
let posMaior, valorMaior

for (let i = 0; i < list_aparicoes.length; i++) {
    posMaior = i
    valorMaior = list_aparicoes[i]
    for (let k = i + 1; k < list_aparicoes.length; k++) {
        if (list_aparicoes[k] > valorMaior) {
            valorMaior = list_aparicoes[k]
            posMaior = k
        }
    }
    if (posMaior != i) {
        let aux = list_aparicoes[i]
        list_aparicoes[i] = list_aparicoes[posMaior]
        list_aparicoes[posMaior] = aux
    }
}

console.log(list_aparicoes)
