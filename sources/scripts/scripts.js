// Função para calcular o saldo de vitórias e determinar o nível
function calcularNivel(vitorias) {
    let nivel;

    // Estruturas de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Função principal para calcular o saldo e exibir o resultado
function exibirResultado() {
    // Coletar os valores de vitórias e derrotas do usuário
    const vitorias = parseInt(document.getElementById("vit").value);
    const derrotas = parseInt(document.getElementById("der").value);

    // Verificar se os valores são válidos
    if (isNaN(vitorias) || isNaN(derrotas)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcular saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Chamar a função calcularNivel para obter o nível do jogador
    const nivel = calcularNivel(vitorias);

    // Exibir o resultado final com saldo e nível
    document.getElementById("resultado").innerText = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;

    // Repetir animação para aumentar a interação
    repetirAnimacao();
}

// Função para repetir a animação de exibição do resultado
function repetirAnimacao() {
    const resultado = document.getElementById("resultado");

    // Laço de repetição para aplicar animação de destaque
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            resultado.style.opacity = '0';
            setTimeout(() => {
                resultado.style.opacity = '1';
            }, 100);
        }, i * 300);
    }
}
