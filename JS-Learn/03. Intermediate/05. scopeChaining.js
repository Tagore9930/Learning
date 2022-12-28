var Name = "Tagore";

console.log(`Line number 3 : ${Name}`);

function sayName() {
   // var Name = "Appa";
   console.log(`Line number 7 : ${Name}`);
   sayNameTwo();

   function sayNameTwo() {
      // var Name = "Mama";
      console.log(`Line number 12 : ${Name}`);
   }
}

sayName();