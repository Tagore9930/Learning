// for (let i = 0; i < 10; i++) {
//    console.log(i);
// }

var myStates = [
   "Andhra Pradesh",
   "Telagana",
   "Karnataka",
   "Rajasthan",
   1947,
   "Delhi",
   "Tamil Nadu",
   "Maharastra",
]
for (let i = 0; i < myStates.length; i++) {
   if (typeof (myStates[i]) !== "string") {
      continue;
   }
   console.log("First : - ", myStates[i]);
}


console.log("-----------------------------------------------------------");


for (let i = 0; i < myStates.length; i++) {
   if (typeof (myStates[i]) === "string") {
      continue;
   }
   console.log("Second : - ", myStates[i]);
}

// let i = 0;
// while (i < 5) {
//       i++;
//       if (i === 3) {
//             continue; // skip the task and continue the loop;
//          }
//          console.log("index value", i);
//       }


console.log("-----------------------------------------------");


// let i = 0;

// while (i < myStates.length) {
//    console.log(myStates[i]);           // while loop first check condition after e
//    i++
// }


let i = 40;

do {
   console.log(i);
   i++
} while (i < 10)
