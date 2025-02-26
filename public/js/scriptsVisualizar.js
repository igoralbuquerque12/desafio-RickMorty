function loadData() {
    const url = window.location.pathname;
    const url_parcionada = url.split('/');
    const ordenacao = url_parcionada[2];

    fetch(`/api/dados/${ordenacao}`, {
        method: 'GET'
    })
    .then(response => response.json)
    .then(data => {
        console.log(data)
    })
};

document.addEventListener('DOMContentLoaded', loadData)