function sayHello(name) {
   console.log("Hello there , Tagore");
   console.log("Hello there, ", name);
   console.log(`Hello there ${name}. How are you?`);
   return `Hello there , ${name} I am tagore`;
}
sayHello("Keshava");
sayHello("Jithendra");

var greeting = sayHello("Bharath");

console.log(greeting);
console.log(sayHello("Appa"));