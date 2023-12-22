var hours = 0
var minutes = 0
var seconds = 0
var state = true
var intervalId
var onOff = document.getElementById("onOff")
var reset = document.getElementById("reset")
onOff.addEventListener("click", () => {
    if (state) {
        start(state)
        let list = onOff.classList
        list.remove("btn-success")
        list.add("btn-danger")
        onOff.innerHTML = "Stop"
        state = false
    } else {
        clearInterval(intervalId)
        let list = onOff.classList
        list.remove("btn-danger")
        list.add("btn-success")
        onOff.innerHTML = "Start"
        state = true
    }
})
reset.addEventListener("click", () => {
    clearInterval(intervalId)
    let list = onOff.classList
    list.remove("btn-danger")
    list.add("btn-success")
    onOff.innerHTML = "Start"
    state=true
    hours = 0
    minutes = 0
    seconds = 0
    let watchTimer = document.getElementById("timer")
    watchTimer.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})
function start(state) {
    intervalId = setInterval(() => {
        ++seconds
        if (seconds == 60) {
            minutes += 1
            seconds = 0
        } else if (minutes == 60) {
            hours += 1
            minutes = 0
            seconds = 0
        }
        let watchTimer = document.getElementById("timer")
        watchTimer.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }, 1000)
}

