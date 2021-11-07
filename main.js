// For onscroll
// console.log("test")
let section = document.querySelector(".our-skills")
let progresSpan = document.querySelectorAll(".the-progress span")
// console.log(progresSpan)
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        // console.log("OK")
        progresSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
///////////////           For Count Down         ////////////////

let date = new Date().getTime();
console.log(date)
let countDownDate = new Date("Dec 31,2021 23:59:59").getTime();
console.log(countDownDate)
// let countForDiff=co
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    // Find The Deferance Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let secunds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".secunds").innerHTML = secunds < 10 ? `0${secunds}` : secunds;
}, 1000)