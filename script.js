let section = document.querySelector("section");
let icons = document.querySelector(".icons");
let hours = document.querySelector(".hour_num");
let mins = document.querySelector(".min_num");
let secs = document.querySelector(".sec_num");
let am_Pm = document.querySelector(".am_pm");

icons.addEventListener("click", () => section.classList.toggle("dark"));

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let amPm;

  amPm = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.innerText = hour;
  mins.innerText = min;
  secs.innerText = sec;
  am_Pm.innerText = amPm;
}, 1000);
