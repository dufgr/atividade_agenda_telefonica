const form = document.getElementById('agenda');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const imgTelefone = '<img src="./images/telefone.png" alt="Telefone" />';
const imgCelular = '<img src="./images/celular.png" alt="Celular" />';
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nomeValido = false;
  const erro = document.querySelector('.erro');

  nomeValido = validaNome(nome.value);

  if (nomeValido) {
    erro.style.display = "none";
    adicionaLinha();
    atualizaTabela();
  }
  else {
    erro.style.display = "block";
  }
});

function adicionaLinha() {

  if (numeros.includes(telefone.value)) {
    alert(`O Número ${telefone.value} já foi cadastrado!`);

  } else {

    nomes.push(nome.value);
    numeros.push(telefone.value);

    let linha = '<tr>'
    linha += `<td>${telefone.value.length <= 14 ? imgTelefone : imgCelular}</td>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'

    linhas += linha;
  }

  nome.value = '';
  telefone.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function validaNome(nomeCompleto) {
  return nomeCompleto.split(' ').length >= 2;
}


/* Código para Máscara de entrada do campo telefone
https://www.ramoncp.com.br/snippets/mascara-de-telefone-para-input-em-js 
*/
const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}