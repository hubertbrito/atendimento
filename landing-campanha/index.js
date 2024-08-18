function enviarParaWhatsApp() {
    const nomeValue = document.getElementById("nome").value;  
    const servicoValue = document.getElementById("servico").value;
   
  
    // Verifica se todos os campos estão preenchidos
    if (!nomeValue || !servicoValue) {
        alert("Preencha todos os campos corretamente antes de enviar.");
        return; // Impede o envio se algum campo estiver vazio
    }
  
   
  
    // Todos os campos estão preenchidos e validados, envie para o WhatsApp
    const numeroWhatsApp = "55 31 988711073"; // Substitua pelo número correto
    const mensagemWhatsApp = `Nome: ${nomeValue}%0AServiço: ${servicoValue}`;
  
    // Crie o link para enviar para o WhatsApp
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemWhatsApp}`;
  
    // Redirecione para o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
  }
  