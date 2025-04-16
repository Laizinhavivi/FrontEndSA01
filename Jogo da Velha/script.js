const currentPlayer = document.querySelector(".currentPlayer"); 
// Pegando o elemento HTML que vai mostrar o jogador da vez (com a classe "currentPlayer")

let selected; // Vai guardar as posições já selecionadas pelos jogadores
let player = "X"; // Começa com o jogador "X"

let positions = [ // Todas as combinações possíveis para vencer o jogo
  [1, 2, 3], // Linha 1
  [4, 5, 6], // Linha 2
  [7, 8, 9], // Linha 3
  [1, 4, 7], // Coluna 1
  [2, 5, 8], // Coluna 2
  [3, 6, 9], // Coluna 3
  [1, 5, 9], // Diagonal principal
  [3, 5, 7]  // Diagonal secundária
];

function init() { 
  // Função para iniciar ou reiniciar o jogo
  selected = []; // Zera as jogadas anteriores
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`; // Exibe o jogador atual

  document.querySelectorAll(".game button").forEach((button) => {
    // Seleciona todos os botões do tabuleiro e executa para cada um:
    button.innerHTML = ""; // Limpa o botão (remove X ou O)
    button.addEventListener("click", newMove); // Adiciona o evento de clique que chama a função de jogada
  });
}

init(); // Chama a função para iniciar o jogo quando a página é carregada

function newMove(e) {
  // Função chamada quando o jogador clica em um botão do tabuleiro
  const index = Number(e.target.getAttribute("data-i")); 
  // Pega o número da posição clicada no atributo "data-i"

  if (selected[index]) return; 
  // Se essa posição já foi escolhida, não faz nada

  selected[index] = player; // Marca a posição como sendo do jogador atual
  e.target.innerHTML = player; // Mostra X ou O no botão clicado
  e.target.removeEventListener("click", newMove); 
  // Remove o evento de clique para não permitir outra jogada nesse botão

  setTimeout(() => {
    checkWinner(); // Verifica se o jogador venceu
  }, 100); // Um pequeno atraso para dar tempo de renderizar a jogada na tela

  player = player === "X" ? "O" : "X"; 
  // Alterna o jogador (se for X, vira O; se for O, vira X)
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
  // Atualiza a mensagem mostrando de quem é a vez
}

function checkWinner() {
  // Verifica se algum jogador venceu
  const lastPlayer = player === "X" ? "O" : "X"; 
  // O último jogador a jogar (porque já trocamos acima)

  const moves = Object.keys(selected)
    .filter((key) => selected[key] === lastPlayer)
    .map(Number); 
  // Pega as posições que o último jogador marcou

  for (const combo of positions) {
    // Para cada combinação possível de vitória
    if (combo.every((pos) => moves.includes(pos))) {
      // Verifica se todas as posições dessa combinação foram marcadas pelo jogador
      alert(`O JOGADOR ${lastPlayer} GANHOU!`);
      init(); // Reinicia o jogo
      return;
    }
  }

  if (Object.keys(selected).length === 9) {
    // Se todas as 9 posições estiverem ocupadas e ninguém ganhou
    alert("DEU EMPATE!");
    init(); // Reinicia o jogo
  }
}

init(); // Garante que o jogo comece quando o script for carregado