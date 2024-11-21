const timeTogetherButton = document.getElementById("timeTogether");
const firstMeetingButton = document.getElementById("firstMeeting");
const backButton = document.getElementById("backButton");
const displayArea = document.getElementById("displayArea");
const mainButtons = document.getElementById("mainButtons");
const content = document.getElementById("content");

// Função para atualizar o tempo (pode ser usada para ambos os botões)
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
  setTimeout(() => updateTime(startTime), 1000);
}

// Função para mostrar a área de exibição e limpar conteúdo antigo
function showDisplayArea() {
  mainButtons.classList.add("hidden");
  displayArea.classList.remove("hidden");
  content.innerHTML = ""; // Limpa qualquer conteúdo anterior
}

// Botão "Tempo Juntos"
timeTogetherButton.addEventListener("click", () => {
  const startTime = new Date("2024-09-21T17:49:00");
  showDisplayArea();
  updateTime(startTime);
});

// Botão "Primeiro Encontro"
firstMeetingButton.addEventListener("click", () => {
  const firstMeetingTime = new Date("2024-01-23T15:47:00");
  showDisplayArea();
  updateTime(firstMeetingTime);
});

// Botão "Voltar"
backButton.addEventListener("click", () => {
  mainButtons.classList.remove("hidden");
  displayArea.classList.add("hidden");
  content.innerHTML = ""; // Limpa o conteúdo exibido
});
