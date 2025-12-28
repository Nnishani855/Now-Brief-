function updateDayUI() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const dayName = days[now.getDay()];

  document.getElementById("datetime").innerText =
    `${hours}:${minutes} • ${dayName}`;

  document.getElementById("greeting").innerText =
    `Happy ${dayName} 👋`;

  const summary = document.getElementById("summary");
  const body = document.body;

  /* Background and daily summary by DAY */
  switch (dayName) {
    case "Monday":
      body.style.background = "linear-gradient(180deg, #1e3a8a, #3b82f6)";
      summary.innerText = "Fresh start to the week 💪";
      break;
    case "Tuesday":
      body.style.background = "linear-gradient(180deg, #065f46, #34d399)";
      summary.innerText = "Stay focused today 🎯";
      break;
    case "Wednesday":
      body.style.background = "linear-gradient(180deg, #6d28d9, #a78bfa)";
      summary.innerText = "Midweek balance ⚖️";
      break;
    case "Thursday":
      body.style.background = "linear-gradient(180deg, #0f766e, #5eead4)";
      summary.innerText = "Almost there 🚀";
      break;
    case "Friday":
      body.style.background = "linear-gradient(180deg, #9d174d, #f472b6)";
      summary.innerText = "Friday vibes 🎉";
      break;
    case "Saturday":
      body.style.background = "linear-gradient(180deg, #92400e, #facc15)";
      summary.innerText = "Enjoy your weekend ☀️";
      break;
    case "Sunday":
      body.style.background = "linear-gradient(180deg, #020617, #334155)";
      summary.innerText = "Relax and recharge 🌙";
      break;
  }
}

function loadWeather() {
  setTimeout(() => {
    document.getElementById("weather").innerText =
      "29°C • Cloudy";
  }, 1200);
}

/* Read Aloud */
document.querySelector(".read-button").addEventListener("click", () => {
  const summaryText = document.getElementById("summary").innerText;
  const speech = new SpeechSynthesisUtterance(summaryText);
  window.speechSynthesis.speak(speech);
});

updateDayUI();
loadWeather();
setInterval(updateDayUI, 60000);
