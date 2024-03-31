const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const amPmEl = document.getElementById("am-pm");

function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hoursEl.textContent = hours % 12 || 12;
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
    amPmEl.textContent = meridiem;
}

setInterval(updateClock, 1000);

updateClock();
