tipper("80");
function tipper(a) {
   var bill = parseInt(a);
   console.log(`line number 4 : ${bill + 5}`);
}

var bigTipper = function (a) {
   var bill = parseInt(a);
   console.log(`line number 9 : ${bill + 10}`);
};

bigTipper("200");

console.log(`line number 14 : ${Name}`);
var Name = "Tagore";

function sayName() {
   var Name = "Appa";
   console.log(`line number 19 : ${Name}`);
}

sayName();
console.log(`line number 23 : ${Name}`);