let timer;
let [seconds, minutes, hours] = [0, 0, 0];
const display = document.getElementById("timer");
const lapsList = document.getElementById("laps-list");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = ""; // clear laps
}

function recordLap() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  const lapItem = document.createElement("li");
  lapItem.textContent = `${h}:${m}:${s}`;
  lapsList.appendChild(lapItem);
}

// Event listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

// Initialize
updateDisplay();
