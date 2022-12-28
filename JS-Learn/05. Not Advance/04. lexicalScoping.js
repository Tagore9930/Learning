function test1() {
   var firstName = "tagore";
   function getFirstName() {
      console.log(`Line number 4 :- ${firstName}`);
   }
   getFirstName();
}

test1();

function test2() {
   var firstName = "tagore";
   function getFirstName() {
      console.log(`Line number 14 :- ${this.firstName}`);
   }
   getFirstName();
}

test2();

function test3() {
   this.firstName = "tagore";
   function getFirstName() {
      console.log(`Line number 24 :- ${firstName}`);
   }
   getFirstName();
}

test3();

function test4() {
   this.firstName = "tagore";
   function getFirstName() {
      console.log(`Line number 34 :- ${this.firstName}`);
   }
   getFirstName();
}

test4();

