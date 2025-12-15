// Lista com 100 códigos secretos pré-definidos
const codigosSecretos = [
  "A1B2C",
  "K1L2M",
  "U1V2W",
  "E1F2G",
  "O1P2Q",
  // Adicione mais códigos conforme necessário
];

const codigoSecreto = codigosSecretos[Math.floor(Math.random() * codigosSecretos.length)];

// Exibe o código secreto na tela
document.getElementById("codigoExibido").textContent = codigoSecreto;

function verificarCodigo() {
  const codigoInserido = document.getElementById("codigoInput").value;
  const messageDiv = document.getElementById("message");

  if (codigosSecretos.includes(codigoInserido)) {
    messageDiv.innerHTML = "<div class='success-message'>Código correto! Você pode avançar para a próxima página.</div>";
    // Redireciona para a próxima página (por enquanto está vazia)
    setTimeout(() => {
      window.location.href = "pagina2.html"; // Altere o caminho conforme necessário
    }, 2000);
  } else {
    const zoeiraMessages = [
      "Sabe nem digitar? O código que você digitou está incorreto!",
      "Acho que você está perdendo seu tempo! Código errado!",
      "Códigos secretos não são pra todo mundo, né? Tente de novo!",
      "Eita! Aí não, hein! Código incorreto!",
      "Nem acertou um! Sério mesmo?"
    ];
    const randomZoeira = zoeiraMessages[Math.floor(Math.random() * zoeiraMessages.length)];
    messageDiv.innerHTML = "<div class='error-message'>" + randomZoeira + "</div>";
  }
}
