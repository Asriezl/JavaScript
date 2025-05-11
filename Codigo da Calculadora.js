const display = document.getElementById('display');
let expressao = '';

function inserir(valor) {
    expressao += valor;
    display.value = expressao;
}

function limpar() {
    expressao = '';
    display.value = '';
}

function apagar() {
    expressao = expressao.slice(0, -1);
    display.value = expressao;
}

function calcular() {
    try {
        expressao = eval(expressao);
        display.value = expressao;
    } catch (error) {
        display.value = 'Erro';
        expressao = '';
    }
}

// Efeito de brilho ao clicar no display
display.addEventListener('click', function(e) {
    const brilho = document.createElement('span');
    brilho.classList.add('brilho-input');
    this.appendChild(brilho);

    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    brilho.style.left = `${x}px`;
    brilho.style.top = `${y}px`;

    setTimeout(() => {
        brilho.remove();
    }, 500);
});
