/** Falsy values
 * undefined
 * null
 * 0
 * ''
 * NaN
 */
var a;
var b = null;
var c = 0;
var d = "";
var e = 2 - "a";
var user = 2;

console.log("\na :- ", a);
console.log("b :- ", b);
console.log("c :- ", c);
console.log("d :- ", d);
console.log("e :- ", e);

if (user == 2) {                       //__________
  console.log("Condition is True");    //          |
} else {                               //          |
  console.log("Condition is False");   //          |
}                                      //          |
                                       //          |---->>> (==) double equalsTo Condition.
if (user == "2") {                     //          |
  console.log("Condition is True");    //          |
} else {                               //          |
  console.log("Condition is False");   //          |
}                                      //__________|

if (user === 2) {                      //__________
  console.log("Condition is True");    //          |
} else {                               //          |
  console.log("Condition is False");   //          |
}                                      //          |
if (user === "2") {                    //          |------>>> (===) threeble equalsTo Condition.
  console.log("Condition is True");    //          |
} else {                               //          |
  console.log("Condition is False");   //          |
}                                      //__________|
