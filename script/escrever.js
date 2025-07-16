document.getElementById('escreverCarta').addEventListener('submit', function (event) {
    event.preventDefault(); // impede o envio padrão

    // Coletar os valores dos inputs
    const remetente = document.getElementById('remetente').value;
    const data = document.getElementById('data').value;
    const destinatario = document.getElementById('destinatario').value;
    const email = document.getElementById('email').value;
    const titulo = document.getElementById('titulo').value;
    const mensagem = document.getElementById('mensagem').value;


    // Preencher a seção "carta" com os dados
    document.getElementById('remetenteCarta').textContent = remetente;
    document.getElementById('dataCarta').textContent = data;
    document.getElementById('destinatarioCarta').textContent = destinatario;
    document.getElementById('emailCarta').textContent = email;
    document.getElementById('tituloCarta').textContent = titulo;
    document.getElementById('mensagemCarta').textContent = mensagem;
});

const carta = document.getElementById("carta");
const cortina = document.getElementById("cortina");
const body = document.getElementById("body");
const cortinaContent = document.getElementById("cortinaContent");

function expandir() {
    cortinaContent.innerHTML = carta.innerHTML;
    cortinaContent.classList.add('carta');
    cortina.classList.add('cortina');
    cortina.style.display = "block";
    body.style.overflow = "hidden"
}

function sair(){
    cortinaContent.innerHTML = "";
    cortinaContent.classList.remove('carta');
    cortina.classList.remove('cortina');
    cortina.style.display = "none";
    body.style.overflow = "auto"
}