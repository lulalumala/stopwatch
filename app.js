const startButton = document.getElementById("startbutton")
const stopButton = document.getElementById("stopbutton")
const resetButton = document.getElementById("resetbutton")
const stopTimer = document.getElementById("timer")
let [minute, second, milisecond] = [0, 0, 0]
let int = null


function mainTime() {

    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milisecond < 100 ? "0" + milisecond : milisecond;


    milisecond += 10;
    if (milisecond == 1000) {
        second++
        milisecond=0
    }
    if (second == 60) {
        minute++
        second=0
    }

    stopTimer.innerHTML = `${m}:${s}:${ms}`
    
}



startButton.addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int)
    }
    int=setInterval(mainTime, 10)
    console.log(int)
    
})
stopButton.addEventListener("click", ()=>{
    clearInterval(int)
})
resetButton.addEventListener("click", () => {
    clearInterval(int)
    stopTimer.innerHTML = `00:00:00`
    minute = 0
    second = 0
    milisecond = 0
    
})


