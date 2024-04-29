const timeEl = document.getElementById("time")
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")
const lapBtn = document.getElementById("lap")
const lapsEl = document.getElementById("laps")
let time = 0
let lap = 0
let timer

function updateTime() {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)
  timeEl.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

function startTimer() {
  timer = setInterval(() => {
    time++
    updateTime()
  }, 1000)
}

function pauseTimer() {
  clearInterval(timer)
}
function resetTimer() {
    clearInterval(timer)
    time = 0
    lap = 0
    updateTime()
    lapsEl.innerHTML = ""
  }
  
  function lapTimer() {
    const li = document.createElement("li")
    li.textContent ='${lap.toString().padStart(2, "0")} ${(time % 60).toString().padStart(2, "0")}'
    lapsEl.appendChild(li)
    lap++
  }
  
  startBtn.addEventListener("click", startTimer)
  pauseBtn.addEventListener("click", pauseTimer)
  resetBtn.addEventListener("click", resetTimer)
  lapBtn.addEventListener("click", lapTimer)
  
  resetTimer()