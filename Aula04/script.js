const btnEsquerda = document.getElementById('botao1');
const btnDireita = document.getElementById('botao2'); 

btnDireita.addEventListener('click', function() {
    const atual = document.querySelector('.galeria .selecionada');

    let proximo = atual.nextElementSibling;
    
    if (proximo === null) {
        proximo = document.querySelector('.galeria').firstElementChild;
    }

    atual.classList.remove('selecionada');
    proximo.classList.add('selecionada');
});


btnEsquerda.addEventListener('click', function() {

    const atual = document.querySelector('.galeria .selecionada');

    let anterior = atual.previousElementSibling;
    
    if (anterior === null) {
        anterior = document.querySelector('.galeria').lastElementChild;
    }

    atual.classList.remove('selecionada');
    anterior.classList.add('selecionada');
});