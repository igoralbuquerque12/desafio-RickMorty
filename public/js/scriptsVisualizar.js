function loadData() {
    const url = window.location.pathname;
    const url_parcionada = url.split('/');
    const ordenacao = url_parcionada[2];

    fetch(`/api/dados/${ordenacao}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {

        const botao = document.getElementById(`btn${ordenacao}`);
        botao.classList.add('active');
        
        let personagemHTML = '';
        const divPersonagem = document.getElementById('container-personagem');

        data.personagens.forEach(personagem => {
            personagemHTML += `
            <div class="col-md-4 mb-4"> <!-- Adicionamos espaçamento inferior entre os cards -->
                <div class="card shadow-lg rounded-3"> <!-- Borda arredondada e sombra -->
                    <img src="${personagem.image}" class="card-img-top" alt="Imagem do Card">
                    <div class="card-body">
                        <h5 class="card-title" style="padding-bottom: 15px; display: flex; justify-content: center">${personagem.name}</h5>
                        <p class="card-text"><strong>Visto pela última vez em:</strong> ${personagem.location.name}</p>
                        <p class="card-text"><strong>Espécie:</strong> ${personagem.species}</p>
                        <p class="card-text"><strong>Status:</strong> ${personagem.status}</p>
                        <p class="card-text"><strong>Aparições na primeira temporada:</strong> ${personagem.episodeForSeason[0]}</p>
                        <p class="card-text"><strong>Aparições na segunda temporada:</strong> ${personagem.episodeForSeason[1]}</p>
                        <p class="card-text"><strong>Aparições na terceira temporada:</strong> ${personagem.episodeForSeason[2]}</p>
                    </div>
                </div>
            </div>
            `;
        });
        
        divPersonagem.innerHTML = personagemHTML;
    })
    
    

};

document.addEventListener('DOMContentLoaded', loadData)