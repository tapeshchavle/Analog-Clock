const deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const dt = document.querySelector(".date");
let setdate = new Date();
setInterval(() => {
  let day = new Date();

  let ms = day.getMilliseconds() * deg;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg + ms / 1000;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1);

let date =
  setdate.getDate() + "-0" + setdate.getMonth() + "-" + setdate.getFullYear();
dt.innerHTML = date;
