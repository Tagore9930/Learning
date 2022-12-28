var hour = 0, min = 0, sec = 0, starting = false;
let timer;

var Hours = document.querySelector('.Hours');
var Minutes = document.querySelector('.Minutes');
var Seconds = document.querySelector('.Seconds');
var show = document.querySelector('.show');
var startButton = document.querySelector('#startButton');
var arrows = {
  HoursUpArrow: document.getElementById("HoursUpArrow"), // HRUA : Hours Up Arrow
  HoursDownArrow: document.getElementById("HoursDownArrow"),
  MinUpArrow: document.getElementById("MinUpArrow"),
  MinDownArrow: document.getElementById("MinDownArrow"),
  SecondsUpArrow: document.getElementById("SecondsUpArrow"),
  SecondsDownArrow: document.getElementById("SecondsDownArrow"),
}
function hidingArrows(hideValue) {
  this.arrows.HoursUpArrow.style.display = hideValue;
  this.arrows.HoursDownArrow.style.display = hideValue;
  this.arrows.MinUpArrow.style.display = hideValue;
  this.arrows.MinDownArrow.style.display = hideValue;
  this.arrows.SecondsUpArrow.style.display = hideValue;
  this.arrows.SecondsDownArrow.style.display = hideValue;
}
function run() {
  timer = setInterval(() => {
    Seconds.innerHTML = (sec < 10) ? "0" + sec : sec;
    Minutes.innerHTML = (min < 10) ? "0" + min : min;
    Hours.innerHTML = (hour < 10) ? "0" + hour : hour;
    
    if (hour !== 0) {
      if (min !== 0) {
        (sec != 0) ? sec-- : min--; sec = 59;
      }
      else if (sec !== 0) sec--;
      else {
        hour--;
        min = 59;
      }
    }
    else if (min !== 0) {
      if (sec !== 0) {
        sec--;
      } else {
        min--;
        sec = 59;
      }
    }
    else if (sec !== 0) sec--;
    else {
      clearInterval(timer);
      show.innerHTML = "Time Up";
      starting = false;
      startButton.innerHTML = "Start";
      hidingArrows("block");

    }
  }, 1000);
}

function start() {
  if (starting == false) {
    startButton.innerHTML = "Pause";
    hidingArrows("none");
    run();
    show.innerHTML = "Running";
    starting = true;
  } else {
    clearInterval(timer);
    starting = false;
    show.innerHTML = "Paused";
    startButton.innerHTML = "Resume";
  }
}
function reset() {
  clearInterval(timer);
  starting = false;
  startButton.innerHTML = "Start";
  sec = Number(Seconds.innerHTML = "00");
  min = Number(Minutes.innerHTML = "00");
  hour = Number(Hours.innerHTML = "00");
  show.innerHTML = "";
  hidingArrows("block");
}
function Arrows(data) {
  if (startButton.innerHTML === "Start") {
    switch (data) {
      case "HRUAV":
        if (Hours.innerHTML !== "00")
          Hours.innerHTML = (hour < 10) ? (hour != 9) ? "0" + --hour : --hour : --hour;
        break;
      case "HRDAV":
        // if (hour < 10) {
        //   if (hour != 9) {
        //     Hours.innerHTML = "0" + hour++;
        //   } else {
        //     Hours.innerHTML = hour++;
        //   }
        // } else {
        //   Hours.innerHTML = hour++;
        // }
        Hours.innerHTML = (hour < 10) ? ((hour != 9) ? "0" + ++hour : ++hour) : ++hour;
        console.log(hour);
        break;
      case "MINUAV":
        if (Minutes.innerHTML !== "00")
          Minutes.innerHTML = (min < 10) ? (min != 9) ? "0" + --min : --min : --min;
        break;
      case "MINDAV":
        Minutes.innerHTML = (min < 10) ? (min != 9) ? "0" + ++min : ++min : ++min;
        break;
      case "SECUAV":
        if (Seconds.innerHTML !== "00")
          Seconds.innerHTML = (sec < 10) ? (sec != 9) ? "0" + --sec : --sec : --sec;
        break;
      case "SECDAV":
        Seconds.innerHTML = (sec < 10) ? (sec != 9) ? "0" + ++sec : ++sec : ++sec;
        break;
    }
  }
}