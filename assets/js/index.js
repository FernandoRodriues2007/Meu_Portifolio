// Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const icone = document.getElementById('icone');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        if (!isHidden) {
            // Menu visível - muda ícone para X
            icone.classList.remove('fa-bars');
            icone.classList.add('fa-xmark');
            menuBtn.setAttribute('aria-label', 'Fechar menu');
        } else {
            // Menu oculto - volta ao ícone de hambúrguer
            icone.classList.remove('fa-xmark');
            icone.classList.add('fa-bars');
            menuBtn.setAttribute('aria-label', 'Abrir menu');
        }
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', (!expanded).toString());
    });
}

// Efeito de Digitação
function typeEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Iniciar efeito quando página carrega
window.addEventListener('load', () => {
    const introTitle = document.getElementById('intro-title');
    const introText = document.getElementById('intro-text');

    if (introTitle && introText) {
        const titleText = 'Olá, eu sou Fernando Rodrigues';
        const descText = 'Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre buscando aprender e crescer profissionalmente.';

        // Digita o título
        typeEffect(introTitle, titleText, 50);

        // Após o título terminar, digita o parágrafo
        setTimeout(() => {
            typeEffect(introText, descText, 30);
        }, titleText.length * 50 + 300);
    }
});