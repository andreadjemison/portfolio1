$(document).ready(() => {
    realTime()
    setInterval(realTime, 1000)
})

//==alarm sound plays in a loop
let alarmSound = new Audio("audio/work.mp3")
alarmSound.loop = true


let realTime
setInterval(realTime = () => {
    let d = new Date()
    let fullDate = d.toDateString()

    let hrs = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    let ampm = "AM"

    if (hrs >= 12) {
        hrs -= 12
        ampm = "PM"
    }
    if (hrs == 0) {
        hrs = 12
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    let time = `${hrs}:${min}:${sec} ${ampm}`

    $('.date').text(fullDate)
    $('.digital').text(time)

    let alHr = $('#hr').val()
    let alMin = $('#min').val()
    let alSec = 00
    let alAmpm = $('#ampm').val()
    if (hrs == alHr && min == alMin && sec == alSec && ampm == alAmpm) {
        alarmSound.play()
    }
    // console.log(time)
}, 1000)

$('.set').on('click', () => {
    $('.set').addClass('timeset')
})


$('#clear').on("click", () => {
    location.reload()
})