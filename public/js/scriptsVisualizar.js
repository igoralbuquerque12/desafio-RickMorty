function loadData() {
    const url = window.location.pathname;
    const url_parcionada = url.split('/');
    const ordenacao = url_parcionada[2];

    fetch(`/api/dados/${ordenacao}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        let personagemHTML = '';
        const divPersonagem = document.getElementById('container-personagem');

        data.personagens.forEach(personagem => {
            personagemHTML += `
            <div class="col-md-4 mb-4"> <!-- Adicionamos espaçamento inferior entre os cards -->
                <div class="card shadow-lg rounded-3"> <!-- Borda arredondada e sombra -->
                    <img src="${personagem.image}" class="card-img-top" alt="Imagem do Card">
                    <div class="card-body">
                        <h5 class="card-title">${personagem.name}</h5>
                        <p class="card-text">Espécie: ${personagem.species}</p>
                        <p class="card-text">Última Localização: ${personagem.location.name}</p>
                        <p class="card-text">Status: ${personagem.status}</p>
                        <a href="https://example.com" class="btn btn-warning w-100" target="_blank">Visite o site</a> <!-- Botão com largura total -->
                    </div>
                </div>
            </div>
            `;
        });
        
        divPersonagem.innerHTML = personagemHTML;
    })
    
    

};

document.addEventListener('DOMContentLoaded', loadData)