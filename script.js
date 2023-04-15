document.getElementById("formJogo").addEventListener("submit", function(event) {
    event.preventDefault();
    var numeroAdivinhado = document.getElementById("inputNumero").value;
    
    // Chamada para o código Java (substituir pelo código Java real)
    var numeroSorteado = 42; // Exemplo de número sorteado
    if (numeroAdivinhado == numeroSorteado) {
      document.getElementById("resultado").innerText = "Parabéns! Você acertou!";
    } else {
      document.getElementById("resultado").innerText = "Fim de jogo. O número sorteado era: " + numeroSorteado;
    }
  });
  