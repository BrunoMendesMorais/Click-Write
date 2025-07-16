const carta = document.getElementById("carta");
const cortina = document.getElementById("cortina");
const body = document.getElementById("body");
const cortinaContent = document.getElementById("cortinaContent");
const prancheta = document.getElementById("prancheta");

setTimeout(() => {
    prancheta.style.zIndex = "1"
}, 2000);

document.getElementById('escreverCarta').addEventListener('submit', function (event) {
    event.preventDefault();

    const remetente = document.getElementById('remetente').value;
    const data = document.getElementById('data').value;
    const destinatario = document.getElementById('destinatario').value;
    const email = document.getElementById('email').value;
    const titulo = document.getElementById('titulo').value;
    const mensagem = document.getElementById('mensagem').value;
    carta.style.display = "grid";
    carta.classList.add("escrever");
    document.getElementById('remetenteCarta').textContent = remetente;
    document.getElementById('dataCarta').textContent = data;
    document.getElementById('destinatarioCarta').textContent = destinatario;
    document.getElementById('emailCarta').textContent = email;
    document.getElementById('tituloCarta').textContent = titulo;
    document.getElementById('mensagemCarta').textContent = mensagem;

});


function expandir() {
    cortinaContent.innerHTML = carta.innerHTML;
    cortinaContent.classList.add('carta');
    cortina.classList.add('cortina');
    cortina.style.display = "block";
    body.style.overflow = "hidden"
}

function sair() {
    cortinaContent.innerHTML = "";
    cortinaContent.classList.remove('carta');
    cortina.classList.remove('cortina');
    cortina.style.display = "none";
    body.style.overflow = "auto"
}

let scale = 1;

function zoomIn() {
    scale += 0.1;
    applyZoom();
}

function zoomOut() {
    scale = Math.max(0.1, scale - 0.1);
    applyZoom();
}

function applyZoom() {
    cortinaContent.style.transform = `scale(${scale})`;
}