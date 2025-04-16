// Lista com as cores que o semáforo vai alternar
const luzes = ['vermelho', 'amarelo', 'verde'];

// Índice da luz atual (começa na primeira: vermelho)
let luzAtual = 0;

// Função responsável por mudar a luz do semáforo
function mudaLuz() {
    // Remove todas as classes de cor das luzes
    luzes.forEach(cor => {
        document.getElementById(`luz-${cor}`).classList.remove(cor);
    });

    // Adiciona a classe da cor atual à luz correspondente
    document.getElementById(`luz-${luzes[luzAtual]}`).classList.add(luzes[luzAtual]);

    // Atualiza o índice para a próxima luz (volta ao início com o operador %)
    luzAtual = (luzAtual + 1) % luzes.length;
}

// Define um intervalo para chamar a função a cada 3 segundos (3000ms)
setInterval(mudaLuz, 3000);

// Chama a função uma vez ao carregar a página para iniciar o ciclo
mudaLuz();
