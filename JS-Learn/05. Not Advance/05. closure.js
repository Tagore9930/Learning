function func(x) {
   console.log(`Line number X :- ${x}`);
   return function (y) {
      console.log(`Line number Y :- ${y}`);
      return function (z) {
         console.log(`Line number Z :- ${z}`);
         return x + y;
      }
   }
}

// calling two types.

// type 1:
var add = func(5);

var megaAdd = add(10);

console.log(megaAdd(6));

// type 2:
console.log(func(5)(4)(3));

// func()()()() //---- Curring