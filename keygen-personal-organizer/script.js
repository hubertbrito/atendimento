

    function TrocarTexto() {
        var botao = document.getElementById("meuBotao");
        if (botao.innerHTML === "Esconder texto") {
            botao.innerHTML = "Mostrar texto";
        } else {
            botao.innerHTML = "Esconder texto";
        }
    }

