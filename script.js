const codigosSecretos = [
  "A1B2C",
  "K1L2M",
  "U1V2W",
  "E1F2G",
  "O1P2Q",
];

function verificarCodigo() {
  const codigoInserido = document.getElementById("codigoInput").value;
  const messageDiv = document.getElementById("message");

  if (codigosSecretos.includes(codigoInserido)) {
    
    messageDiv.innerHTML = "<div id='success-message'>Código correto! Você será redirecionado.</div>";
    
    setTimeout(() => {
      window.location.href = "pagina2.html"; 
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
    messageDiv.innerHTML = "<div id='error-message'>" + randomZoeira + "</div>";
  }
}
