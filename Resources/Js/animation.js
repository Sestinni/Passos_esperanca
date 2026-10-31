const elementosAnimados = document.querySelectorAll(
    '.impacto_line, .listra_fill_bac'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animar');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
});


const fotos = document.querySelectorAll('.painel_fotos .foto');
let fotoAtual = 0;
setInterval(() => {

    fotos[fotoAtual].classList.remove('ativa');

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    fotos[fotoAtual].classList.add('ativa');

}, 5000);