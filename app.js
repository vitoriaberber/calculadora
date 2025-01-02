let res = document.getElementById('res');
let expressao = '';

function calc(value) {
    expressao += value;
    res.innerText = expressao;
}

function calcular(){
    let resultado = eval(expressao);
    res.innerText = resultado;
    expressao = resultado.toString();
}

function limpar() {
    expressao = '';
    res.innerText = '';
}

function deletar() {
    expressao = expressao.slice(0, -1);
    res.innerText = expressao;
}
