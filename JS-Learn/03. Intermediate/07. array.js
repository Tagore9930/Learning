var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Andhra Pradesh", "Rajasthan", "Karnataka", "Delhi");

console.log("\nLine number 5 : ", states);
console.log(`\nLine number 6 : ${states[0]}`);
console.log(`\nLine number 7 : ${states.length}`);

states[3] = "telangana";
console.log("\nLine number 10 : ", states);

var user = ["Tagore", "tagore9930@gmail.com", 17, "javascript"];
console.log("\nLine number 13 : ", user);

user.pop();
console.log("\nLine number 16 : ", user);
user.pop();
console.log("\nLine number 18 : ", user);
user.unshift("Banda ");
console.log("\nLine number 20 : ", user);
user.shift();
console.log("\nLine number 22 : ", user);