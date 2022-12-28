// First line Colors

let red = document.querySelector(".red");
let orangered = document.querySelector(".orangered");
let orange = document.querySelector(".orange");
let yellow = document.querySelector(".yellow");
let olive = document.querySelector(".olive");

// Second line Colors

let deeppink = document.querySelector(".deeppink");
let fuchsla = document.querySelector(".fuchsla");
let purple = document.querySelector(".purple");
let lime = document.querySelector(".lime");
let green = document.querySelector(".green");

// Third Line Colors

let maroon = document.querySelector(".maroon");
let black = document.querySelector(".black");
let pink = document.querySelector(".pink");
let sliver = document.querySelector(".sliver");
let gray = document.querySelector(".gray");

// Forth Line Colors
let navy = document.querySelector(".navy");
let blue = document.querySelector(".blue");
let royalBlue = document.querySelector(".royalBlue");
let aqua = document.querySelector(".aqua");
let teal = document.querySelector(".teal");

// Center Color & Code

let center = document.querySelector(".center");
let text = document.querySelector(".text");

let selectedColor = (data) => {
   return window.getComputedStyle(data).backgroundColor;
}

function userColor(element, color) {
   return element.addEventListener("mouseenter", () => {
      center.style.background = color;
      text.innerHTML = color;
   })
}
// First Line Colors calling

userColor( red, selectedColor(red));
userColor( orangered, selectedColor(orangered));
userColor( orange, selectedColor(orange));
userColor( yellow, selectedColor(yellow));
userColor( olive, selectedColor(olive));

// Second Line Colors calling

userColor( deeppink, selectedColor(deeppink));
userColor( fuchsla, selectedColor(fuchsla));
userColor( purple, selectedColor(purple));
userColor( lime, selectedColor(lime));
userColor( green, selectedColor(green));

// Third Line Colors calling

userColor( maroon, selectedColor(maroon));
userColor( black, selectedColor(black));
userColor( pink, selectedColor(pink));
userColor( sliver, selectedColor(sliver));
userColor( gray, selectedColor(gray));

// Forth Line Colors calling

userColor( navy, selectedColor(navy));
userColor( blue, selectedColor(blue));
userColor( royalBlue, selectedColor(royalBlue));
userColor( aqua, selectedColor(aqua));
userColor( teal, selectedColor(teal));