let form = document.getElementById('cadastro');
let lista = document.getElementById('listaAluno');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;
    const login = document.getElementById('loginAluno').value;
    const equipe = document.getElementById('equipeFavorita').value;

    const novoItem = document.createElement('li');

    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - Login: ${login} - Equipe Favorita: ${equipe}`;

    lista.appendChild(novoItem);

    form.reset();
});