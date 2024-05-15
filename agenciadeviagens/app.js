document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const ida = document.getElementById('ida').value;
    const volta = document.getElementById('volta').value;
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !celular || !ida || !volta || !origem || !destino) {
        alert("Preencha todos os campos corretamente antes de enviar.");
        return false; // Impede o envio se algum campo estiver vazio
    }

    // Redireciona para a página "apresentacao.html"
    window.location.href = `recebe_dados.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&celular=${encodeURIComponent(celular)}&ida=${encodeURIComponent(ida)}&volta=${encodeURIComponent(volta)}&origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`;
   
});
