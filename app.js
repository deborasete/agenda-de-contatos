const form = document.getElementById('form');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(e);
    cadastrar();
    adicionarNaTabela();
});

function cadastrar() {
    const nomeInput = document.getElementById('nome-contato');
    const telefoneInput = document.getElementById('telefone-contato');

    const nome = nomeInput.value.trim().toLowerCase();
    const telefone = telefoneInput.value.trim();

    if (nomes.includes(nome)) {
        alert (`Lista já possui '${nomeInput.value}'. Insira um novo contato`);
    } else {
        nomes.push(nome);
        telefones.push(parseInt(telefone));

        let linha ='<tr>';
        linha += `<td>${nomeInput.value}</td>`;
        linha += `<td>${telefone}</td>`;
        linha+= '</tr>';
        linhas += linha;
    }

    nome.value = '';
    telefone.value = '';
}

function adicionarNaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}