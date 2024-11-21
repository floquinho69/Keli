const timeTogetherButton = document.getElementById("timeTogether");
const firstMeetingButton = document.getElementById("firstMeeting");
const resetButton = document.getElementById("resetButton");
const displayArea = document.getElementById("displayArea");
const mainButtons = document.getElementById("mainButtons");
const content = document.getElementById("content");

// Variável para armazenar o id do setTimeout e parar a execução anterior
let timeoutId;

// Função para atualizar o tempo
function updateTime(startTime) {
  const now = new Date();
  const diff = now - startTime;

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  content.innerHTML = `
    <p>
      <strong>${months}</strong> meses, 
      <strong>${days}</strong> dias, 
      <strong>${hours}</strong> horas, 
      <strong>${minutes}</strong> minutos, 
      <strong>${seconds}</strong> segundos!
    </p>
  `;

  // Atualiza o tempo a cada segundo
  timeoutId = setTimeout(() => updateTime(startTime), 1000);
}

// Função para mostrar a área de exibição e limpar conteúdo antigo
function showDisplayArea() {
  // Limpa qualquer conteúdo antigo
  content.innerHTML = "";
  mainButtons.classList.add("hidden");
  displayArea.classList.remove("hidden");
}

// Função para parar o timeout anterior e resetar a área
function resetDisplayArea() {
  clearTimeout(timeoutId); // Interrompe qualquer execução de timeout anterior
  content.innerHTML = ""; // Limpa o conteúdo exibido
  mainButtons.classList.remove("hidden");
  displayArea.classList.add("hidden");
}

// Botão "Tempo Juntos"
timeTogetherButton.addEventListener("click", () => {
  const startTime = new Date("2024-09-21T17:49:00");
  resetDisplayArea(); // Limpa e garante que não há outro tempo sendo exibido
  showDisplayArea(); // Exibe a nova tela
  updateTime(startTime); // Exibe o tempo calculado
});

// Botão "Primeiro Encontro"
firstMeetingButton.addEventListener("click", () => {
  const firstMeetingTime = new Date("2024-01-23T15:47:00");
  resetDisplayArea(); // Limpa e garante que não há outro tempo sendo exibido
  showDisplayArea(); // Exibe a nova tela
  updateTime(firstMeetingTime); // Exibe o tempo calculado
});

// Botão "Resetar"
resetButton.addEventListener("click", () => {
  resetDisplayArea(); // Limpa o conteúdo e retorna à tela inicial
});
